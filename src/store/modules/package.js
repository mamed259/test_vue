import { getPackages } from '@/api/request';

const packageModule = {
    state: {
        list: null,
        totalSize: 1
    },

    getters: {
        getPackageList(state) {
            return state.list;
        },
        getTotalSize(state) {
            return state.totalSize;
        },
    },

    mutations: {
        setPackageList(state, data) {
            state.list = data;
        },
        setTotalSize(state, data) {
            state.totalSize = data;
        },
    },

    actions: {
        async fetchPackages({ commit }, {packageName, from}) {
            const { data } = await getPackages(packageName, from);
            commit('setPackageList', data.objects);
            commit('setTotalSize', data.total);
            return data;
        }
    }
};

export default packageModule;
