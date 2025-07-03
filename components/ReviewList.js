const reviewList = {
    template: `
      <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
          <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} or {{ review.nickname}} gave this {{ review.rating }} stars 
            <br/>
            "{{ review.review }}"
            <br/>
            <strong>Would recommend:</strong> {{ review.recommend === 'yes' ? 'Yes' : 'No' }}
            <br/>
          </li>
        </ul>
      </div>
    `,
    props: {
      reviews: {
        type: Array
      }
    },
    setup(props) {
      const reviews = props.reviews
      return {
        reviews
      }
    }
  }
  window.reviewList = reviewList