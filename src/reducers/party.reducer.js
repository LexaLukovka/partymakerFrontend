import moment from 'moment'

const initialState = {
  party:
    {
      id: 1,
      user: {
        id: 1,
        name: 'Pavel Kostyuk',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      },
      picture_urls: [
        'https://seda.college/wp-content/uploads/party.jpg',
        'https://seda.college/wp-content/uploads/party.jpg',
        'https://seda.college/wp-content/uploads/party.jpg',
        'https://seda.college/wp-content/uploads/party.jpg',
      ],
      status: 'сбор участников',
      dateTime: 'в воскресенье на 13:30',
      address: 'ул. Космическая 112б',
      region: 'ATK',
      description: 'Народ предлагаю сходить на шашлыки на выходных. Будет весело)',
      amount: 125,
      table: ['Пицца', 'Чипсы'],
      entertainment: 'пока не предлагали',
      people_count: 11,
      telegram_url: 'https://t.me/joinchat/FzgsKUzTAHNJTGm6FfAWXQ',
    },
}

const partiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state
    }
  }
}

export default partiesReducer
