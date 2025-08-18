// profileImages.ts
export const profileImages: string[] = [
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/men/7.jpg",
  "https://randomuser.me/api/portraits/men/8.jpg",
];

export function getProfileImage(id: number): string {
  if (!id) return "https://i.pravatar.cc/150?u=default";

  const index = (id - 1) % profileImages.length;
  return profileImages[index] ?? `https://i.pravatar.cc/150?u=${id}`;
}


export const postImages: string[] = [
  "https://picsum.photos/id/1012/600/400",
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1024/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1031/600/400",
];

export function getPostImage(id: number): string {
  if (!id) return "https://picsum.photos/600/400?random=default";

  const index = (id - 1) % postImages.length;
  return postImages[index] ?? `https://picsum.photos/600/400?random=${id}`;
}