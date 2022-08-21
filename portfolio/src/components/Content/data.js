import movieImage from '../../assets/movie-pc.png';
import todoListImg from '../../assets/todolist.gif';
import houseImg from '../../assets/house-pc.png';

const data = [
    {
        id: 1,
        title: "HYEONCINEMA : 영화 웹 서비스",
        skills: ['react'],
        explanation: "The Movie Database(TMDB)의 Api를 이용하여 현재 상영중인 영화를 시작으로 평점이 높은순, 상영 예정작 등의 데이터를 사용하여 만든 반응형페이지 입니다.",
        demo: 'https://hyesom2642.github.io/movie_chart',
        github: 'https://github.com/hyesom2642/movie_chart',
        images: movieImage,
    },
    {
        id: 2,
        title: "Todo List",
        skills: ['react'],
        explanation: "React로 만든 간단한 Todo List 입니다.",
        demo: '#',
        github: 'https://github.com/hyesom2642/my_little_projects/tree/main/04_todolist',
        images: todoListImg,
    },
    {
        id: 3,
        title: "오늘의집 상세페이지",
        skills: ['html', 'css', 'scss', 'javascript'],
        explanation: "오늘의집의 상세페이지를 클론코딩한 반응형페이지 입니다.",
        demo: 'https://hyesom2642.github.io/tomorrow-house/',
        github: 'https://github.com/hyesom2642/tomorrow-house',
        images: houseImg,
    },
]

export default data;