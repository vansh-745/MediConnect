export type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  imageUrl?: string;
};

export const articleData: Record<number, Article> = {
  1: {
    id: 1,
    title: "Understanding Mental Health",
    content: `
      Mental health is a crucial component of our overall well-being that affects how we think, feel, and act. It influences how we handle stress, relate to others, and make choices.

      Key Aspects of Mental Health:
      
      1. Emotional Well-being
      - Understanding and managing your emotions
      - Building resilience to life's challenges
      - Maintaining a positive outlook while acknowledging all emotions
      
      2. Psychological Well-being
      - Developing healthy coping mechanisms
      - Setting and achieving personal goals
      - Maintaining healthy relationships
      
      3. Social Well-being
      - Creating and maintaining meaningful connections
      - Contributing to your community
      - Developing strong communication skills

      Tips for Maintaining Good Mental Health:
      
      • Practice regular self-care
      • Maintain a consistent sleep schedule
      • Exercise regularly
      • Stay connected with friends and family
      • Seek professional help when needed
      • Practice mindfulness or meditation
      • Set healthy boundaries

      Remember, mental health is just as important as physical health. If you're struggling, don't hesitate to reach out to mental health professionals or support services.
    `,
    category: "Mental Health",
    readTime: "5 min read",
    author: "Dr. Sarah Johnson",
    publishDate: "2024-03-15",
  },
  2: {
    id: 2,
    title: "Nutrition Basics",
    content: `
      Understanding proper nutrition is fundamental to maintaining good health. This guide covers the essential principles of a balanced diet.

      Macronutrients:

      1. Proteins
      - Building blocks for muscles and tissues
      - Sources: lean meats, fish, legumes, eggs
      - Recommended: 10-35% of daily calories

      2. Carbohydrates
      - Primary energy source
      - Sources: whole grains, fruits, vegetables
      - Recommended: 45-65% of daily calories

      3. Fats
      - Essential for hormone production and nutrient absorption
      - Sources: avocados, nuts, olive oil, fatty fish
      - Recommended: 20-35% of daily calories

      Key Micronutrients:
      
      • Vitamins A, C, D, E, K, and B-complex
      • Minerals: Iron, Calcium, Magnesium, Zinc
      • Antioxidants

      Healthy Eating Tips:
      
      - Eat a rainbow of fruits and vegetables
      - Choose whole grains over refined grains
      - Stay hydrated (aim for 8 glasses of water daily)
      - Limit processed foods and added sugars
      - Practice portion control
      
      Remember: Individual nutritional needs vary based on age, activity level, and health conditions.
    `,
    category: "Nutrition",
    readTime: "4 min read",
    author: "Maria Rodriguez, RD",
    publishDate: "2024-03-14",
  },
  3: {
    id: 3,
    title: "Exercise Fundamentals",
    content: `
      Regular exercise is essential for maintaining both physical and mental health. This guide covers the basics of starting and maintaining an exercise routine.

      Types of Exercise:

      1. Cardiovascular Exercise
      - Running, walking, cycling, swimming
      - Benefits: heart health, endurance, weight management
      - Recommended: 150 minutes moderate or 75 minutes vigorous per week

      2. Strength Training
      - Weight lifting, bodyweight exercises, resistance bands
      - Benefits: muscle strength, bone density, metabolism
      - Recommended: 2-3 sessions per week

      3. Flexibility Training
      - Stretching, yoga, pilates
      - Benefits: range of motion, injury prevention
      - Recommended: 2-3 sessions per week

      Getting Started:

      • Start slowly and gradually increase intensity
      • Focus on proper form to prevent injury
      • Listen to your body and rest when needed
      • Stay consistent with your routine
      • Set realistic goals

      Sample Beginner's Workout:
      
      - 5-10 minutes warm-up
      - 20 minutes cardio
      - Basic strength exercises (squats, push-ups, planks)
      - 5-10 minutes cool-down stretches

      Remember: Always consult with healthcare providers before starting a new exercise program.
    `,
    category: "Fitness",
    readTime: "6 min read",
    author: "Mike Thompson, CPT",
    publishDate: "2024-03-13",
  },
  4: {
    id: 4,
    title: "Sleep and Recovery",
    content: `
      Quality sleep is fundamental to health and well-being. Understanding sleep cycles and creating optimal conditions for rest can significantly improve your life quality.

      Sleep Cycle Stages:

      1. Light Sleep (N1 & N2)
      - Initial relaxation phase
      - Body temperature drops
      - Heart rate slows

      2. Deep Sleep (N3)
      - Physical restoration occurs
      - Immune system strengthening
      - Memory consolidation

      3. REM Sleep
      - Dreams occur
      - Brain activity increases
      - Emotional processing

      Tips for Better Sleep:

      • Maintain a consistent sleep schedule
      • Create a relaxing bedtime routine
      • Optimize your sleep environment
        - Keep room cool and dark
        - Use comfortable bedding
        - Minimize noise
      • Limit screen time before bed
      • Avoid caffeine late in the day

      Recovery Practices:
      
      - Practice stress-management techniques
      - Include rest days in exercise routines
      - Listen to your body's needs
      - Practice good sleep hygiene

      Remember: Most adults need 7-9 hours of quality sleep per night.
    `,
    category: "Wellness",
    readTime: "3 min read",
    author: "Dr. James Chen",
    publishDate: "2024-03-12",
  },
  5: {
    id: 5,
    title: "Stress Management",
    content: `
      Stress is a natural part of life, but managing it effectively is crucial for maintaining good health. Learn practical techniques for stress management.

      Understanding Stress:

      1. Types of Stress
      - Acute stress (short-term)
      - Chronic stress (long-term)
      - Eustress (positive stress)

      2. Stress Response
      - Fight or flight response
      - Physical symptoms
      - Emotional impact

      Effective Management Techniques:

      • Mindfulness and Meditation
      - Daily meditation practice
      - Mindful breathing exercises
      - Present moment awareness

      • Physical Activity
      - Regular exercise
      - Yoga or tai chi
      - Walking in nature

      • Time Management
      - Setting priorities
      - Breaking tasks into smaller steps
      - Learning to say no

      • Relaxation Techniques
      - Progressive muscle relaxation
      - Deep breathing exercises
      - Guided imagery

      Lifestyle Changes:
      
      - Maintain a balanced diet
      - Ensure adequate sleep
      - Build strong support systems
      - Practice regular self-care
      
      Remember: Some stress is normal, but chronic stress requires attention and management.
    `,
    category: "Mental Health",
    readTime: "4 min read",
    author: "Dr. Lisa Martinez",
    publishDate: "2024-03-11",
  },
  6: {
    id: 6,
    title: "Healthy Aging",
    content: `
      Aging is a natural process that can be supported through healthy lifestyle choices. Learn how to maintain vitality and well-being as you age.

      Key Aspects of Healthy Aging:

      1. Physical Health
      - Regular exercise appropriate for age
      - Balanced nutrition
      - Regular health check-ups
      - Adequate sleep

      2. Mental Health
      - Cognitive stimulation
      - Social engagement
      - Stress management
      - Emotional well-being

      3. Preventive Care
      - Regular screenings
      - Vaccination updates
      - Dental care
      - Vision checks

      Lifestyle Recommendations:

      • Exercise
      - Low-impact activities
      - Strength training for bone health
      - Balance exercises
      - Flexibility work

      • Nutrition
      - Adequate protein intake
      - Calcium-rich foods
      - Hydration
      - Anti-inflammatory foods

      • Social Connection
      - Maintain relationships
      - Join community groups
      - Volunteer
      - Stay connected with family

      Remember: It's never too late to adopt healthy habits that support successful aging.
    `,
    category: "Wellness",
    readTime: "5 min read",
    author: "Dr. Robert Wilson",
    publishDate: "2024-03-10",
  },
}; 