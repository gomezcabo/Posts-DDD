import { groupBy } from "../../../utils/group-by";
import { unique } from "../../../utils/unique";

import { Comment } from "../../models/comment";
import { User } from "../../models/user";
import { CommentRepository } from "../../../infrastructure/repositories";
import { UserService } from "..";

export function getCommentsByPostId(postId: number): Promise<Comment[]> {
  return CommentRepository.getCommentsByPostId(postId);
}

export async function getCommentsByPostIdWithUser(postId: number): Promise<Array<Comment & { user: User }>> {
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
