import {
    //게시판
    FETCH_BOARD_LIST,
    FETCH_BOARD,

} from './mutation-types'

import axios from 'axios'

// 보통 action에서 처리하는 것은 비동기 처리를 함
export default {

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
    }
}