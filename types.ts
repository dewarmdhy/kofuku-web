
export interface UserProfile {
  name: string;
  age: number;
  gender: 'Pria' | 'Wanita';
  occupation: string;
  weight: number;
  height: number;
  waist: number;
  goals: string[];
  riskReport?: string;
}

export interface Meal {
  id: string;
  name: string;
  type: 'Breakfast' | 'Snack' | 'Lunch' | 'Dinner';
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image: string;
}

export interface Exercise {
  id: string;
  name: string;
  category: 'Cardio' | 'Strength' | 'Flexibility' | 'HIIT';
  sets: string;
  reps: string;
  rest: string;
  difficulty: 'Mudah' | 'Sedang' | 'Sulit';
  image: string;
}

export interface Challenge {
  id: string;
  title: string;
  participants: number;
  progress: number;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'kofuku';
  timestamp: Date;
}
