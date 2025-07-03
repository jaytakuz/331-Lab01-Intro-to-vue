const productDetail = {
    template:
      /*html*/
      `
        <li v-for="detail in details">{{ detail }}</li>
      `,
  
      props: {
        details: Array
      },
      setup(props) {
        const details = props.details
  
        return {
          details
        }
      }
  }