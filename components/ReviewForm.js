const reviewForm = {
    template: `
  
      <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="form.name">
  
          <label for="nickname">Your nickname:</label>
        <input id="nickname" v-model="form.nickname">
  
        <label for="review">Review:</label>
        <textarea id="review" v-model="form.review"></textarea>
  
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="form.rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>

        <label for="recommend"><br>Would you recommend this product?</label>
        <select id="recommend" v-model="form.recommend">
          <option value="">Please select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <input class="button" type="submit" value="Submit" >
  
      </form>
    `,
    setup(props,{emit}) {
      const form = Vue.reactive({
        name: '',
        review: '',
        rating: null,
        nickname: '',
        recommend: ''
  
      })
  
      function onSubmit() {
  
          if(form.name === '' || form.review === '' || form.rating === null || form.recommend === ''){
              alert('Review is incomplete. Please fill out every field')
              return
          }
  
          const productReview = {
              name: form.name,
              review: form.review,
              rating: form.rating,
              nickname: form.nickname,
              recommend: form.recommend
  
          }
          emit('review-submitted',productReview)
          form.name = ''
          form.review = ''
          form.rating = null
          form.nickname = ''
          form.recommend = ''
      }
      return {
        form,
        onSubmit
      }
    }
  }
  window.reviewForm = reviewForm