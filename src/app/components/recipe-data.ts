import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';


import { Recipe } from './recipe';

export class RecipeData implements InMemoryDbService{
    createDb(reqInfo?: RequestInfo): {} | import("rxjs").Observable<{}> {
      const recipes: Recipe[] = [
        {
          id: 1,
          name: 'Something Yummy',
          prep:'30 mins',
          cook: '10 mins',
          total: '2 hrs' ,
          additional: '2 hrs',
          servings: '6',
          imageURL: 'assets/images/healthy-food.jpg',
          videoURL: 'https://www.youtube.com/embed/Oh2ZYK_KEAU',
          ingredients: ['Freshly ground black pepper',
           '2 tbsp. extra-virgin olive oil',
           '2 tbsp. butter'],
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at auctor magna. Aliquam posuere arcu at leo lacinia semper. Nulla posuere mi sed erat auctor interdum. Aenean hendrerit, leo nec semper pellentesque, mauris libero ultricies dui, nec accumsan ipsum urna et leo. Vivamus malesuada velit quis orci lacinia, ut finibus ipsum gravida. Cras sodales diam id ante imperdiet accumsan. Proin lacinia, nisl a gravida consectetur, elit nisl dapibus lacus, a viverra arcu libero et diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam scelerisque leo risus, at pulvinar quam efficitur suscipit. Ut ullamcorper, erat eu bibendum efficitur, dui dui pulvinar leo, non posuere tortor nibh vitae nibh. Nunc vitae leo viverra, efficitur massa vel, ultrices eros. Suspendisse elementum hendrerit tincidunt. Vestibulum felis felis, feugiat vitae nulla a, convallis eleifend lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sodales porta nunc id interdum. Morbi metus diam, viverra eget diam ut, imperdiet consectetur lorem.'
        },
        {
          id: 2,
          name: 'Better than take-away rice',
          prep:'45 mins',
          cook: '60 mins',
          total: '3 hrs' ,
          additional: '1 hrs',
          servings: '6',
          imageURL: 'assets/images/rice.jpg',
          videoURL: 'https://www.youtube.com/embed/Oh2ZYK_KEAU',
          ingredients: ['Freshly ground black pepper',
          '2 tbsp. extra-virgin olive oil',
          '2 tbsp. butter'],
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at auctor magna. Aliquam posuere arcu at leo lacinia semper. Nulla posuere mi sed erat auctor interdum. Aenean hendrerit, leo nec semper pellentesque, mauris libero ultricies dui, nec accumsan ipsum urna et leo. Vivamus malesuada velit quis orci lacinia, ut finibus ipsum gravida. Cras sodales diam id ante imperdiet accumsan. Proin lacinia, nisl a gravida consectetur, elit nisl dapibus lacus, a viverra arcu libero et diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam scelerisque leo risus, at pulvinar quam efficitur suscipit. Ut ullamcorper, erat eu bibendum efficitur, dui dui pulvinar leo, non posuere tortor nibh vitae nibh. Nunc vitae leo viverra, efficitur massa vel, ultrices eros. Suspendisse elementum hendrerit tincidunt. Vestibulum felis felis, feugiat vitae nulla a, convallis eleifend lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sodales porta nunc id interdum. Morbi metus diam, viverra eget diam ut, imperdiet consectetur lorem.'
        },
        {
          id: 3,
          name: 'Cake',
          prep:'1 hrs',
          cook: '30 mins',
          total: '2 hrs' ,
          additional: '2 hrs',
          servings: '6',
          imageURL: 'assets/images/Cake.jpg',
          videoURL: 'https://www.youtube.com/embed/Oh2ZYK_KEAU',
          ingredients: ['White Flour',
          '2 tbsp. sugar',
          '2 tbsp. butter'],
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at auctor magna. Aliquam posuere arcu at leo lacinia semper. Nulla posuere mi sed erat auctor interdum. Aenean hendrerit, leo nec semper pellentesque, mauris libero ultricies dui, nec accumsan ipsum urna et leo. Vivamus malesuada velit quis orci lacinia, ut finibus ipsum gravida. Cras sodales diam id ante imperdiet accumsan. Proin lacinia, nisl a gravida consectetur, elit nisl dapibus lacus, a viverra arcu libero et diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam scelerisque leo risus, at pulvinar quam efficitur suscipit. Ut ullamcorper, erat eu bibendum efficitur, dui dui pulvinar leo, non posuere tortor nibh vitae nibh. Nunc vitae leo viverra, efficitur massa vel, ultrices eros. Suspendisse elementum hendrerit tincidunt. Vestibulum felis felis, feugiat vitae nulla a, convallis eleifend lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sodales porta nunc id interdum. Morbi metus diam, viverra eget diam ut, imperdiet consectetur lorem.'
        },
        {
          id: 4,
          name: 'Roasted vegetables',
          prep:'30 mins',
          cook: '50 mins',
          total: '2 hrs' ,
          additional: '-',
          servings: '4',
          imageURL: 'assets/images/vegetable.jpg',
          videoURL: 'https://www.youtube.com/embed/Oh2ZYK_KEAU',
          ingredients: ['Freshly ground black pepper',
          '2 tbsp. extra-virgin olive oil',
          '2 tbsp. butter'],
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at auctor magna. Aliquam posuere arcu at leo lacinia semper. Nulla posuere mi sed erat auctor interdum. Aenean hendrerit, leo nec semper pellentesque, mauris libero ultricies dui, nec accumsan ipsum urna et leo. Vivamus malesuada velit quis orci lacinia, ut finibus ipsum gravida. Cras sodales diam id ante imperdiet accumsan. Proin lacinia, nisl a gravida consectetur, elit nisl dapibus lacus, a viverra arcu libero et diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam scelerisque leo risus, at pulvinar quam efficitur suscipit. Ut ullamcorper, erat eu bibendum efficitur, dui dui pulvinar leo, non posuere tortor nibh vitae nibh. Nunc vitae leo viverra, efficitur massa vel, ultrices eros. Suspendisse elementum hendrerit tincidunt. Vestibulum felis felis, feugiat vitae nulla a, convallis eleifend lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sodales porta nunc id interdum. Morbi metus diam, viverra eget diam ut, imperdiet consectetur lorem.'
        },
        {
          id: 5,
          name: 'Asparagus',
          prep:'30 mins',
          cook: '50 mins',
          total: '2 hrs' ,
          additional: '-',
          servings: '4',
          imageURL: 'assets/images/sparanghel.jpg',
          videoURL: 'https://www.youtube.com/embed/Oh2ZYK_KEAU',
          ingredients: ['Freshly ground black pepper',
          '2 tbsp. extra-virgin olive oil',
          '2 tbsp. butter'],
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at auctor magna. Aliquam posuere arcu at leo lacinia semper. Nulla posuere mi sed erat auctor interdum. Aenean hendrerit, leo nec semper pellentesque, mauris libero ultricies dui, nec accumsan ipsum urna et leo. Vivamus malesuada velit quis orci lacinia, ut finibus ipsum gravida. Cras sodales diam id ante imperdiet accumsan. Proin lacinia, nisl a gravida consectetur, elit nisl dapibus lacus, a viverra arcu libero et diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam scelerisque leo risus, at pulvinar quam efficitur suscipit. Ut ullamcorper, erat eu bibendum efficitur, dui dui pulvinar leo, non posuere tortor nibh vitae nibh. Nunc vitae leo viverra, efficitur massa vel, ultrices eros. Suspendisse elementum hendrerit tincidunt. Vestibulum felis felis, feugiat vitae nulla a, convallis eleifend lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sodales porta nunc id interdum. Morbi metus diam, viverra eget diam ut, imperdiet consectetur lorem.'
        },
        {
          id: 6,
          name: 'Curry',
          prep:'30 mins',
          cook: '50 mins',
          total: '2 hrs' ,
          additional: '-',
          servings: '4',
          imageURL: 'assets/images/curry.jpg',
          videoURL: 'https://www.youtube.com/embed/Oh2ZYK_KEAU',
          ingredients: ['Freshly ground black pepper',
          '2 tbsp. extra-virgin olive oil',
          '2 tbsp. butter'],
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at auctor magna. Aliquam posuere arcu at leo lacinia semper. Nulla posuere mi sed erat auctor interdum. Aenean hendrerit, leo nec semper pellentesque, mauris libero ultricies dui, nec accumsan ipsum urna et leo. Vivamus malesuada velit quis orci lacinia, ut finibus ipsum gravida. Cras sodales diam id ante imperdiet accumsan. Proin lacinia, nisl a gravida consectetur, elit nisl dapibus lacus, a viverra arcu libero et diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam scelerisque leo risus, at pulvinar quam efficitur suscipit. Ut ullamcorper, erat eu bibendum efficitur, dui dui pulvinar leo, non posuere tortor nibh vitae nibh. Nunc vitae leo viverra, efficitur massa vel, ultrices eros. Suspendisse elementum hendrerit tincidunt. Vestibulum felis felis, feugiat vitae nulla a, convallis eleifend lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sodales porta nunc id interdum. Morbi metus diam, viverra eget diam ut, imperdiet consectetur lorem.'
        },
        {
          id: 7,
          name: 'Vegetables Pie',
          prep:'30 mins',
          cook: '50 mins',
          total: '2 hrs' ,
          additional: '-',
          servings: '4',
          imageURL: 'assets/images/Pie.jpg',
          videoURL: 'https://www.youtube.com/embed/Oh2ZYK_KEAU',
          ingredients: ['Freshly ground black pepper',
          '2 tbsp. extra-virgin olive oil',
          '2 tbsp. butter'],
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at auctor magna. Aliquam posuere arcu at leo lacinia semper. Nulla posuere mi sed erat auctor interdum. Aenean hendrerit, leo nec semper pellentesque, mauris libero ultricies dui, nec accumsan ipsum urna et leo. Vivamus malesuada velit quis orci lacinia, ut finibus ipsum gravida. Cras sodales diam id ante imperdiet accumsan. Proin lacinia, nisl a gravida consectetur, elit nisl dapibus lacus, a viverra arcu libero et diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam scelerisque leo risus, at pulvinar quam efficitur suscipit. Ut ullamcorper, erat eu bibendum efficitur, dui dui pulvinar leo, non posuere tortor nibh vitae nibh. Nunc vitae leo viverra, efficitur massa vel, ultrices eros. Suspendisse elementum hendrerit tincidunt. Vestibulum felis felis, feugiat vitae nulla a, convallis eleifend lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sodales porta nunc id interdum. Morbi metus diam, viverra eget diam ut, imperdiet consectetur lorem.'
        },
      ];
      return { recipes } ;
    }
  
}
