import {
    // TODO
    ADD_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    CLEAR_ALL,
    TOGGLE_TODO_STATUS,

    // 몬스터
    ADD_MONSTER,
    DEATH,
    ADD_MANY_MONSTER,
    FETCH_MONSTER_LIST,
    FETCH_MONSTER,
    //spring과 랜덤 데이터 통신
    SUCCESS_GEN_RAND_NUM,
    FAIL_GEN_RAND_NUM,

    //게시판
    FETCH_BOARD_LIST,
    FETCH_BOARD,

    //상품
    FETCH_PRODUCT_LIST,
    FETCH_PRODUCT,
    
    // 랜덤 던전
    ALLOC_RANDOM_DUNGEON,

    // 학생
    SCORE_MANAGEMENT,

    // 크롤링
    CRAWL_START,

    //JPA
    FETCH_MEMBER_LIST,
    FETCH_MEMBER

} from './mutation-types'

import axios from 'axios'
import router from '../router'

// 보통 action에서 처리하는 것은 비동기 처리를 함
export default {
    addTodo (context, payload) {
        context.commit(ADD_TODO, payload)
    },
    save ({ state }) {
        const data = {
            todoItems: state.todoItems,
            nextTodoId: state.nextTodoId
        }

        // DB 대신 임시적으로 사용하고 있음
        localStorage.setItem('todo-app-data', JSON.stringify(data))
    },
    removeTodo (context, payload) {
        context.commit(REMOVE_TODO, payload)
    },
    editTodo ({ commit }, payload) {
        commit(EDIT_TODO, payload)
    },
    clearAll (context) {
        context.commit(CLEAR_ALL)
    },
    toggleTodoStatus({ commit }, id) {
        commit(TOGGLE_TODO_STATUS, id)
    },

    //판타지온라인
    addMonster (context, payload) {
        context.commit(ADD_MONSTER, payload)
    },
    addManyMonster (context, payload) {
        context.commit(ADD_MANY_MONSTER, payload)
    },
    death ({ commit }, payload) {
        commit(DEATH, payload)
    },
    //spring과 랜덤 데이터 통신
    generateRandomNumber ({ commit }) {
        console.log(commit)

        // axios.get: GET 요쳥
        // axios.post: POST 요청
        // 특정 URL로 GET 혹은 POST, 그 외의 요청을 보낼 수 있음
        // 보내고 넘겨 받은 데이터는 .then((res)) 절로 수신함
        // .catch((res)) 절은 오류가 발생했을 경우임
        // 어찌 되었든 응답받은 데이터는 res가 가지고 있음
        axios.get('http://localhost:7777/random')
                .then((res) => {
                    commit(SUCCESS_GEN_RAND_NUM, parseInt(res.data.randNumber))
                })
                .catch((res) => {
                    commit(FAIL_GEN_RAND_NUM, res)
                })
    },
    fetchMonsterList ({commit}) {
        return axios.get('http://localhost:7777/vuemonster/lists')
            .then((res) =>{
                commit(FETCH_MONSTER_LIST, res.data)
            })
    },
    fetchMonster({ commit }, monsterNo) {
        return axios.get(`http://localhost:7777/vuemonster/${monsterNo}`)
        .then((res) => {
            commit(FETCH_MONSTER, res.data)
        })
    },

    // 게시판
    fetchBoardList ({commit}) {
        return axios.get('http://localhost:7777/vueboard/lists')
            .then((res) =>{
                commit(FETCH_BOARD_LIST, res.data)
            })
    },
    fetchBoard({ commit }, boardNo) {
        return axios.get(`http://localhost:7777/vueboard/${boardNo}`)
        .then((res) => {
            commit(FETCH_BOARD, res.data)
        })
    },

    // 게시판
    fetchProductList ({commit}) {
        return axios.get('http://localhost:7777/vueproduct/lists')
            .then((res) =>{
                commit(FETCH_PRODUCT_LIST, res.data)
            })
    },
    fetchProduct({ commit }, productNo) {
        return axios.get(`http://localhost:7777/vueproduct/${productNo}`)
        .then((res) => {
            commit(FETCH_PRODUCT, res.data)
        })
    },

    // 랜덤 던전
    randomDungeonList ({ commit },) {
        return axios.get('http://localhost:7777/vuedungeon/randomAlloc')
                .then((res) => {
                    commit(ALLOC_RANDOM_DUNGEON, res.data)
                })
    },
    // 성적 관리
    fetchStudentScoreList ({ commit }) {
        return axios.get('http://localhost:7777/vuescore/scoreManagement')
                .then((res) => {
                    commit(SCORE_MANAGEMENT, res.data)
                })
    },
     // 크롤링
     async crawlFind ({ commit }, category) {
        axios.get('http://localhost:7777/crawl/' + `${category}`)
                .then(({ data }) => {
                    commit(CRAWL_START, data)

                    if (window.location.pathname !== '/daumNewsCrawler') {
                        router.push('/daumNewsCrawler')
                    }
                })
    },
    // 회원
    fetchMemberList ({commit}) {
        return axios.get('http://localhost:7777/vuejpamember/lists')
            .then((res) =>{
                commit(FETCH_MEMBER_LIST, res.data)
            })
    },
    fetchMember({ commit }, memberNo) {
        return axios.get(`http://localhost:7777/vuejpamember/${memberNo}`)
        .then((res) => {
            commit(FETCH_MEMBER, res.data)
        })
    },
}