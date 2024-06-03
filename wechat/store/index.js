import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({  
    state: {  
		token: '',
		userInfo: {},
		classificationCur: '',
		phoneNumber: ''
    },  
    mutations: {  
		setToken(state, token) {
			state.token = token;
		},
		setuserInfo(state, userInfo) {
			state.userInfo = userInfo;
		},
		setLocation(state, location) {
			state.location = location;
		},
		setPhoneNumber(state, phoneNumber) {
			state.phoneNumber = phoneNumber
		},
		deleteToken(state) {
			state.token = '';
			state.phoneNumber = '';
			state.userInfo = {};
			uni.removeStorageSync('token');
			uni.removeStorageSync('userInfo');
			uni.removeStorageSync('phoneNumber');
		},
		setClassCur(state, type) {
			state.classificationCur = type;
		}
    }  
})

export default store
