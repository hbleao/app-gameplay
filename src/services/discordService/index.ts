import { api } from './../api';

import { discordConfig } from '../../config/discord';

export const discordService = {
  GetUser: async (bearerToken: string) => {
     const { data } = await api.get('/users/@me', {
      headers: {
        authorization: `Bearer ${bearerToken}`
      }
    });

    const userInfo = {
      id: data.id,
      username: data.username,
      firsName: data.username.split(' ')[0],
      avatar: `${discordConfig.CDN_IMAGE}/avatars/${data.id}/${data.avatar}.png`,
      email: data.email,
      token: bearerToken,
    }

    return userInfo;
  },
  GetGuilds: async (bearerToken: string) => {
    const { data } = await api.get('/users/@me/guilds', {
      headers: {
        authorization: `Bearer ${bearerToken}`
      }
    });
  
    return data;
  },
  GetGuildById: async (id: string) => {
    const serverGuildResponse = await api.get(`guilds/${id}/widget.json`);
    return serverGuildResponse.data;
  }
}
