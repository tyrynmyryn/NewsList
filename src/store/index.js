import {
	createStore
} from 'vuex'

export default createStore({
	state: {
		data: [
			{
				id: 1,
				title: 'В Танзании спасли от живодеров 220-летнюю черепаху',
				text: 'Черепаху вида альдабра по кличке Том, возраст которой приравнивается к 220 годам, спасли от живодеров в Танзании. Об этом сообщил в воскресенье, 21 ноября, корреспондент «Известий» Мурад Магомедов.'
			},
			{
				id: 2,
				title: 'Для убивших кота Кузю живодеров потребовали максимальный срок',
				text: 'Зооактивистка из Санкт-Петербурга Маргарита Фрудникова выступила за максимальное наказание для людей, убивших кота в Северодвинске. В беседе с РЕН ТВ, опубликованной 21 ноября, женщина отметила, что зоозащитники не смогли остаться в стороне, узнав про жестокое убийство 14-летнего кота.'
			},
		],
		maxId: 2,
		errorValidate: false
	},
	mutations: {
		addNewNews(state, newNews) {
			const {title, text} = newNews
			const {data} = state
			if (title != '' && text != '') {
				const newNewsItem = {
					id: state.maxId + 1,
					title, 
					text
				}
				data.push(newNewsItem)
				state.errorValidate = false
				state.maxId++
			} else {
				state.errorValidate = true
			}
			
		},
		deleteNews(state, id) {
			const {data} = state
			const idx = data.findIndex(item => item.id === id)
			data.splice(idx, 1)
		},
		changeNews(state, idx) {
			const {title, text} = state.data[idx]
			if (title && text) {
				state.errorValidate = false
			} else {
				state.errorValidate = true
			}
		}
	}
})