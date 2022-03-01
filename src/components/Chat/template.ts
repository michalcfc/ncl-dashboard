export const template = {
  mobile: {
    columns: '22rem 1fr',
    area: 'ChatMain',
  },
  tablet: {
    columns: '22rem 1fr',
    area: `
            "ChatAsideLeft ChatMain"
        `,
  },
  desktop: {
    columns: '22rem 1fr 22rem',
    area: `
            "ChatAsideLeft ChatMain ChatAsideRight"
        `,
  },
};
