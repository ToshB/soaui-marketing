import reqwest from 'reqwest';
import {find} from 'lodash';
import Q from 'q';

const bookPrices = [
  {id: 1, price: 10},
  {id: 2, price: 20},
  {id: 3, price: 30}
];

export default {
  price: function(bookId){
    return Q.Promise((resolve, reject) => {
      resolve(find(bookPrices, 'id', bookId));
      //reqwest({
      //  url: 'http://webstepfagfredag.cloudapp.net/marketing/bookprices/' + bookId,
      //  method: 'get',
      //  type: 'json',
      //  success: function (response) {
      //    resolve(response);
      //  },
      //  error: function (err) {
      //    console.error(err);
      //  }
      //});
    });
  }
};
