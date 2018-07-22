import moment from 'moment'

const initialState = {
  parties: [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Pavel Kostyuk',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      },
      image_url: 'https://seda.college/wp-content/uploads/party.jpg',
      status: 'сбор участников',
      date: moment.now(),
      address: 'ул. Космическая 112б',
      region: 'ATK',
      description: 'Народ предлагаю сходить на шашлыки на выходных. Будет весело)',
      amount: 125,
      table: 'Пицца, Чипсы',
      entertainment: 'пока не предлагали',
      people_count: 11,
    },
    {
      id: 1,
      user: {
        id: 1,
        name: 'Pavel Kostyuk',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      },
      image_url: 'https://seda.college/wp-content/uploads/party.jpg',
      status: 'сбор участников',
      date: moment.now(),
      address: 'ул. Космическая 112б',
      region: 'ATK',
      description: 'Народ предлагаю сходить на шашлыки на выходных. Будет весело)',
      amount: 125,
      table: 'Пицца, Чипсы',
      entertainment: 'пока не предлагали',
      people_count: 11,
    },
    {
      id: 1,
      user: {
        id: 1,
        name: 'Pavel Kostyuk',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      },
      image_url: 'https://seda.college/wp-content/uploads/party.jpg',
      status: 'сбор участников',
      date: moment.now(),
      address: 'ул. Космическая 112б',
      region: 'ATK',
      description: 'Народ предлагаю сходить на шашлыки на выходных. Будет весело)',
      amount: 125,
      table: 'Пицца, Чипсы',
      entertainment: 'пока не предлагали',
      people_count: 11,
    },
    {
      id: 1,
      user: {
        id: 1,
        name: 'Pavel Kostyuk',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      },
      image_url: 'https://seda.college/wp-content/uploads/party.jpg',
      status: 'сбор участников',
      date: moment.now(),
      address: 'ул. Космическая 112б',
      region: 'ATK',
      description: 'Народ предлагаю сходить на шашлыки на выходных. Будет весело)',
      amount: 125,
      table: 'Пицца, Чипсы',
      entertainment: 'пока не предлагали',
      people_count: 11,
    },
  ],
}

const reducer = (state = initialState, { type }) => {
  switch (type) {
    default: {
      return state
    }
  }
}

export default reducer
