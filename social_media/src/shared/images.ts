// profileImages.ts
export const profileImages: string[] = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
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