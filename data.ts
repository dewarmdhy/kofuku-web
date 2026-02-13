
import { Meal, Exercise, Challenge } from './types';

export const SAMPLE_MEALS: Meal[] = [
  {
    id: 'm1',
    name: 'Nasi Merah & Ayam Panggang Madu',
    type: 'Lunch',
    calories: 450,
    protein: 35,
    carbs: 55,
    fat: 12,
    image: 'https://picsum.photos/seed/chicken/400/300'
  },
  {
    id: 'm2',
    name: 'Oatmeal dengan Pisang & Chia Seeds',
    type: 'Breakfast',
    calories: 320,
    protein: 10,
    carbs: 50,
    fat: 8,
    image: 'https://picsum.photos/seed/oats/400/300'
  },
  {
    id: 'm3',
    name: 'Sayur Bayam & Tempe Bacem',
    type: 'Dinner',
    calories: 280,
    protein: 15,
    carbs: 40,
    fat: 6,
    image: 'https://picsum.photos/seed/spinach/400/300'
  }
];

export const SAMPLE_EXERCISES: Exercise[] = [
  { id: 'e1', name: 'Push-up', category: 'Strength', sets: '3', reps: '12-15', rest: '60s', difficulty: 'Sedang', image: 'https://picsum.photos/seed/pushup/400/300' },
  { id: 'e2', name: 'Bodyweight Squat', category: 'Strength', sets: '3', reps: '20', rest: '45s', difficulty: 'Mudah', image: 'https://picsum.photos/seed/squat/400/300' },
  { id: 'e3', name: 'Plank', category: 'Strength', sets: '3', reps: '45s', rest: '30s', difficulty: 'Sedang', image: 'https://picsum.photos/seed/plank/400/300' },
  { id: 'e4', name: 'Jumping Jacks', category: 'Cardio', sets: '4', reps: '30s', rest: '30s', difficulty: 'Mudah', image: 'https://picsum.photos/seed/jumping/400/300' },
  { id: 'e5', name: 'Mountain Climber', category: 'HIIT', sets: '3', reps: '30s', rest: '30s', difficulty: 'Sulit', image: 'https://picsum.photos/seed/mountain/400/300' }
];

export const WEEKLY_CHALLENGES: Challenge[] = [
  { id: 'c1', title: '10,000 Langkah Sehari', participants: 1250, progress: 65 },
  { id: 'c2', title: 'Minum 2L Air Putih', participants: 3400, progress: 80 },
  { id: 'c3', title: 'Meditasi 10 Menit', participants: 890, progress: 40 }
];

export const PSYCHOEDUCATION_ARTICLES = [
  { id: 'p1', title: 'Mengenal Stres Kerja', category: 'Mental Health', readTime: '5 min' },
  { id: 'p2', title: 'Mindfulness untuk Pemula', category: 'Meditation', readTime: '8 min' },
  { id: 'p3', title: 'Work-Life Balance Tips', category: 'Productivity', readTime: '6 min' }
];

export const MOCK_KOFUKU_CHAT = [
  { q: 'Bagaimana cara mulai hidup sehat?', a: 'Halo! Mulailah dengan langkah kecil: perbanyak minum air putih, jalan kaki 15 menit setiap hari, dan pastikan tidur cukup 7-8 jam. Jangan lupa cek menu Meal Plan Kofuku ya!' },
  { q: 'Saya merasa stres hari ini', a: 'Saya mengerti, tekanan kerja terkadang berat. Mari luangkan 2 menit untuk latihan pernapasan di fitur Mental Wellness. Tarik napas perlahan... kamu tidak sendirian.' },
  { q: 'Menu makan siang yang sehat?', a: 'Rekomendasi saya hari ini adalah Nasi Merah dengan Pepes Ikan dan Tumis Kangkung. Kaya protein dan serat!' }
];

export const BADGES = [
  { id: 'b1', name: '7-Day Streak', icon: '🔥' },
  { id: 'b2', name: 'First Workout', icon: '💪' },
  { id: 'b3', name: 'Hydration King', icon: '💧' },
  { id: 'b4', name: 'Early Bird', icon: '🌅' }
];
