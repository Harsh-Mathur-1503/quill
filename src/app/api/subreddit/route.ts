import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { SubredditValidator } from '@/lib/validators/subreddit';
import { z } from 'zod';

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response('Unauthorized', { status: 401 });
    }

    const body = await req.json();

    // Validate subreddit data
    try {
      SubredditValidator.parse(body);
    } catch (validationError) {
      if (validationError instanceof z.ZodError) {
        return new Response(validationError.message, { status: 422 });
      } else {
        // Log unexpected validation errors
        console.error('Unexpected validation error:', validationError);
        return new Response('Could not create subreddit', { status: 500 });
      }
    }

    const { name } = body;

    // check if subreddit already exists
    const subredditExists = await db.subreddit.findFirst({
      where: {
        name,
      },
    });

    if (subredditExists) {
      return new Response('Subreddit already exists', { status: 409 });
    }

    // create subreddit and associate it with the user
    const subreddit = await db.subreddit.create({
      data: {
        name,
        creatorId: session.user.id
      },
    });

    // creator also has to be subscribed
    await db.subscription.create({
      data: {
        userId: session.user.id,
        subredditId: subreddit.id,
      },
    });

    return new Response(subreddit.name);
  } catch (error) {
    // Log unexpected errors
    console.error('Unexpected error:', error);
    return new Response('Could not create subreddit', { status: 500 });
  }
}
