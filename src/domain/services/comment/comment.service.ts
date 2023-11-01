import { groupBy } from "../../../infrastructure/utils/group-by";
import { unique } from "../../../infrastructure/utils/unique";

import { Comment } from "../../models/comment";
import { User } from "../../models/user";
import { CommentRepository } from "../../../infrastructure/repositories";
import { UserService } from "..";
import { Post } from "../../models/post";

export function getCommentsByPostId(postId: Post["id"]): Promise<Comment[]> {
  return CommentRepository.getCommentsByPostId(postId);
}

export async function getCommentsByPostIdWithUser(postId: Post["id"]): Promise<Array<Comment & { user: User }>> {
  const comments = await getCommentsByPostId(postId);

  const userIds = unique(comments.map(({ userId }) => userId));
  const usersPromises = userIds.map((userId) => UserService.getUserById(userId));

  const users = await Promise.all(usersPromises);

  const usersLookup = groupBy(users, "id");

  return comments.map((comment) => ({
    ...comment,
    user: usersLookup[comment.userId],
  }));
}
