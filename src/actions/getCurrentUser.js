import { getSession } from "@/actions/getSession";
import client from "@/_libs/prisma/client";

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await client.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }
    return currentUser;
  } catch (e) {
    return null;
  }
}
