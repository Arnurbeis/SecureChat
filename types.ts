export interface User {
  id: string;
  name: string;
  lastActive: Date;
  avatar?: string;
}

export interface Message {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: Date;
}