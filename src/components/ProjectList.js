/* eslint-disable max-len */
import HappyThoughtsImg from 'images/happy-thoughts-img.jpg';
import ToDoImg from 'images/todo-app-img.jpg';
import DesignImg from 'images/design-handoff-img.jpg';
import MovieImg from 'images/tv-releases-img.jpg';
import LabyrinthImg from 'images/labyrinth-img.jpg';
import WeatherImg from 'images/weather-app-img.jpg';
import MusicImg from 'images/music-img.jpg';
import CatImg from 'images/catbot-img.jpg';
import GameImg from 'images/guesswho-img.jpg';
import SurveyImg from 'images/survey-img.jpg';
import QuizImg from 'images/quiz-img.jpg';
// import ArcadeImg from 'images/arcade-img.jpg';
import SunriseImg from 'images/sunrise-img.jpg';
import ProjectAuthImg from 'images/auth-img.jpg';
import ExpressImg from 'images/express-img.jpg';

export const projectList = [
  {
    title: '🦋 Dora x Minh 3D Website Challenge',
    img: `${SunriseImg}`,
    alt: 'a cute 3D illustration of a sunrise',
    description: 'Dive into the captivating world of  “A Manatee Imagines A Butterfly” through this 3D website crafted using Dora, the revolutionary No-Code web development platform. It is a synesthetic fusion of sight and sound, where the ethereal melodies of Leonard Malmer’s music intertwine with beautiful visuals generated by Nino.',
    tech: ['Dora', 'Midjourney AI'],
    demo: 'https://sunriise.dora.run/',
    hasBackendCode: false,
    isNoCode: true,
    code: 'https://sunriise.dora.run/'
  },
  // {
  //   title: '🕹️ The Arcade: Where Gamers Unite for Retro Fun 🎮 (UPCOMING)',
  //   img: `${ArcadeImg}`,
  //   alt: 'a cute 3D illustration of an arcade game machine',
  //   description: 'Do you love arcade games? Then you will love “The Arcade”, a world of shared passion and nostalgia, where every pixel resonates with the thrill of classic arcade gaming! This full-stack project was meticulously built by Nino Aquilon & Daniel Brobäck, to create the ultimate social platform for arcade game enthusiasts. 👾',
  //   tech: ['HTML', 'CSS', 'Figma', 'JavaScript', 'API', 'React', 'MongoDB', 'Express.js', 'Node.js', 'Midjourney AI'],
  //   demo: '',
  //   hasBackendCode: true,
  //   isNoCode: false,
  //   code: {
  //     frontend: '',
  //     backend: 'https://the-arcade-backend-6426jh4m2a-no.a.run.app/'
  //   }
  // },
  {
    title: '🌟 Happy Thoughts: Spreading Positivity, One Post at a Time',
    img: `${HappyThoughtsImg}`,
    alt: 'a cute 3D illustration of a computer',
    description: 'Like Twitter, but with a kinder touch: Introducing "Happy Thoughts", a platform designed to inspire and uplift. This heartwarming full-stack project was crafted using React and the MERN-stack. Ready to send a little love?',
    tech: ['HTML', 'CSS', 'JavaScript', 'API', 'React', 'Express.js', 'MongoDB', 'Node.js'],
    demo: 'https://ninos-happy-thoughts.netlify.app/',
    hasBackendCode: true,
    isNoCode: false,
    code: {
      frontend: 'https://github.com/codeandjazz/project-happy-thoughts',
      backend: 'https://github.com/codeandjazz/project-happy-thoughts-api'
    }
  },
  {
    title: '🔐 Project Authentication: Your Secure Login System',
    img: `${ProjectAuthImg}`,
    alt: 'a cute 3D illustration of geometric shapes',
    description: 'This project is a full-stack authentication system, built using React and the MERN-stack. It features a secure login system, with password encryption and validation, as well as a user-friendly interface. Ready to log in or register?',
    tech: ['HTML', 'CSS', 'JavaScript', 'API', 'React', 'Express.js', 'MongoDB', 'Node.js'],
    demo: 'https://ninos-project-auth.netlify.app/',
    hasBackendCode: true,
    isNoCode: false,
    code: {
      frontend: 'https://github.com/codeandjazz/project-auth',
      backend: 'https://github.com/codeandjazz/project-auth'
    }
  },
  {
    title: '🌐 Project Express API: Your RESTful API',
    img: `${ExpressImg}`,
    alt: 'a cute 3D illustration of a computer',
    description: 'This project is a RESTful API, built using Express.js. It features data from Trans Rights Indicator Project (TRIP), and is deployed on Render. Ready to explore different routes?',
    tech: ['Express.js', 'Node.js', 'API'],
    demo: 'https://project-express-api-25hw.onrender.com/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-express-api'
  },
  {
    title: '✅ TaskBliss: Your Cute and Organized TodoList App',
    img: `${ToDoImg}`,
    alt: 'a cute 3D illustration of a coffee table',
    description: 'With TaskBliss, you can say goodbye to chaos and hello to productivity! This delightful TodoList app, built using React and Redux Toolkit, is designed to keep you well organized and smiling. With charming illustrations, it is a visual treat as well. Ready to declutter your day?',
    tech: ['JavaScript', 'Redux', 'React', 'Styled Components'],
    demo: 'https://ninos-todos.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-todos'
  },
  {
    title: '🤖 The Last Quiz: Your Ultimate AI Knowledge Challenge',
    img: `${QuizImg}`,
    alt: 'a cute 3D illustration of a computer',
    description: 'Prepare to put your AI knowledge to the test with "The Last Quiz"! This project is the result of a collaborative effort between five talented individuals: Carol Pinzon, Malin Skill, Josefin Robertsson, Emma Engvall, and Nino Aquilon. Engage with thought-provoking questions in a sleek, user-friendly interface built with love using React and Redux.',
    tech: ['Styled Components', 'JavaScript', 'Redux', 'React', 'Mob-Programming'],
    demo: 'https://the-last-quiz.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/JosefinRobertsson/project-redux-quiz'
  },
  {
    title: '🎨 Yogistudio: Bridging UX Vision to Code Reality',
    img: `${DesignImg}`,
    alt: 'a cute 3D illustration of a tablet device',
    description: 'In this project, five developers (Josefin Robertsson, Oscar Sindemark, Sammy Olsson, Yu Miao and Nino Aquilon) and one talented UX design student (Angelica Grönberg Valdes) worked closely together to transform Angelicas creative Figma designs into pixel-perfect code. No functionality involved – the focus was on visual design and effective designer-developer communication.',
    tech: ['HTML', 'CSS', 'React', 'Styled components', 'Figma', 'Mob-programming'],
    demo: 'https://ninos-design-handoff.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-design-handoff'
  },
  {
    title: '🍿 MovieMania: Your Cinematic Hub for the Latest Film Releases',
    img: `${MovieImg}`,
    alt: 'a cute 3D illustration of a TV',
    description: 'Experience the magic of cinema with MovieMania, a multi-page React web application. Developed in collaboration with the talented Daniel Brobäck, MovieMania is the ultimate destination for staying in the know about the latest movie releases. Enjoy a sleek and intuitive design, as well as real-time data sourced from a public API.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API', 'React', 'Pair-Programming'],
    demo: 'https://heartfelt-torrone-e608c2.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-movies'
  },
  {
    title: '🌊 CaveQuest: Dive into the Enchanting World of Sea Caves',
    img: `${LabyrinthImg}`,
    alt: 'a cute 3D illustration of a computer',
    description: 'Prepare to embark on a text-based adventure like no other with CaveQuest. Created using React and Redux together with the talented Malin Skill, we bring you on a journey into the mysterious and breathtaking realm of sea caves. Careful, or you might get lost!',
    tech: ['React', 'Redux'],
    demo: 'https://zippy-vacherin-041127.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-labyrinth'
  },
  {
    title: '📝 MelodyMood: Your Musical Survey',
    img: `${SurveyImg}`,
    alt: 'a cute 3D illustration of headphones and a coffee cup',
    description: 'Experience surveys in a whole new way with MelodyMood! This React-powered survey features custom radio buttons and checkboxes, input validation, and full accessibility, all wrapped in adorable illustrations. Share your musical tastes and emotions effortlessly.',
    tech: ['HTML', 'JavaScript', 'React', 'CSS'],
    demo: 'https://music-survey-react.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-survey'
  },
  {
    title: '🌦️ WeatherMate: Your Dynamic Weather Forecast App',
    img: `${WeatherImg}`,
    alt: 'a cute 3D illustration of a mobile device',
    description: 'Get weather-ready with WeatherMate, a location-based app developed in collaboration with Emma Engvall. See the next 5 days weather, complete with changing colors, icons, and descriptions reflecting real-time conditions. With data sourced from a public API, it is your go-to weather companion.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API', 'Pair-Programming'],
    demo: 'https://hippos-weather.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/EmmaEngvall/project-weather-app'
  },
  {
    title: '🚀 Discover Music: Your Ultimate Music Release App',
    img: `${MusicImg}`,
    alt: 'a cute 3D illustration of a mobile device',
    description: 'Stay up-to-date with the latest releases, dive into artist profiles, and find fresh songs for your playlists with this sleek React-powered app, crafted in collaboration with Theres Brännberg Lendt.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API', 'React', 'Pair-Programming'],
    demo: 'https://t-and-t-music-release-app.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/theresBL/project-music-releases'
  },
  {
    title: '🔍 Guess Who: Animal Edition',
    img: `${GameImg}`,
    alt: 'a cute 3D illustration of a game controller',
    description: 'Test your deduction skills in this family-friendly "Guess Who" game, with a wild twist!',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://ninos-guess-who.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-guess-who'
  },
  {
    title: '🐱 Bob the Chatbot',
    img: `${CatImg}`,
    alt: 'a cute 3D illustration of a cat',
    description: 'Meet Bob, the whimsical chatbot with a feline twist! Built using HTML, CSS, and vanilla JS, Bob is your playful virtual friend who purrs, meows, and adds a touch of fangs to your online experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://bob-the-catbot.netlify.app/',
    hasBackendCode: false,
    isNoCode: false,
    code: 'https://github.com/codeandjazz/project-chatbot'
  }
]