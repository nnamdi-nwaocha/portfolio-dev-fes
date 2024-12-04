/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        p1: '#0077FF', // Primary blue for highlights
        p2: '#FFA500', // Warm orange for accents
        p3: '#00C853', // Vibrant green for success
        p4: '#F5F8FA', // Light grayish background
        p5: '#FFCDD2', // Soft red for warnings
        s1: '#FFFFFF', // Default background white
        s2: '#F1F1F1', // Light gray for sections
        s3: '#B0BEC5', // Subtle blue-gray
        s4: '#607D8B', // Medium gray-blue for depth
        s5: '#78909C', // Muted darker gray-blue
        black: {
          DEFAULT: '#000000',
          100: '#212121', // Dark text on light background
        },
      },
      boxShadow: {
        100: '0px 4px 4px rgba(0, 0, 0, 0.15), 0px 16px 24px rgba(0, 0, 0, 0.15), inset 0px 3px 6px #E3F2FD',
        200: '0px 4px 4px rgba(0, 0, 0, 0.15), 0px 16px 24px rgba(0, 0, 0, 0.15), inset 0px 4px 10px #64B5F6',
        300: '0px 4px 4px rgba(0, 0, 0, 0.15), 0px 16px 24px rgba(0, 0, 0, 0.15), inset 0px 3px 6px #BBDEFB',
        400: 'inset 0px 2px 4px 0 rgba(0, 0, 0, 0.05)',
        500: '0px 16px 24px rgba(0, 0, 0, 0.15), 0px -14px 48px rgba(128, 128, 128, 0.4)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      transitionProperty: {
        borderColor: 'border-color',
      },
      spacing: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '3/20': '15%',
        '7/20': '35%',
        '9/20': '45%',
        '11/20': '55%',
        '13/20': '65%',
        '15/20': '75%',
        '17/20': '85%',
        '19/20': '95%',
        22: '88px',
        100: '100px',
        512: '512px',
        330: '330px',
        388: '388px',
        400: '400px',
        440: '440px',
        640: '640px',
        960: '960px',
        1230: '1230px',
      },
      zIndex: {
        1: '1',
        2: '2',
        4: '4',
      },
      lineHeight: {
        12: '48px',
      },
      borderRadius: {
        14: '14px',
        20: '20px',
        40: '40px',
        half: '50%',
        '7xl': '40px',
      },
      flex: {
        50: '0 0 50%',
        320: '1px 0 320px',
        300: '0 0 300px',
        540: '0 0 540px',
        280: '0 0 280px',
        256: '0 0 256px',
        100: '0 0 100%',
      },
    },
  },
  plugins: [require('daisyui'),],
};
