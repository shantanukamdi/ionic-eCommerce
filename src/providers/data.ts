import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  productsList: any;
  constructor(public http: Http) {
    console.log('Hello Data Provider');
  }

  getElectronics(){
    this.productsList = {
	"products": [{
		"product_name": "One Plus 3T",
		"url": "http://my-live-01.slatic.net/p/2/import-oneplus-3t-6gb-64gb-oxygen-os-gunmetal-4214-34874371-10df29dd15fac27cfa145194604a66ce.jpg",
		"price": 500,
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		"ratingsNo": 1000,
		"reviewNo": 3,
		"reviewDetails": [{
				"postedBy": "John Snow",
				"createdDate": "24/05/2015",
				"review": "This is the best phone till date with whopping 3GB of Ram",
				"rating": "5/5"
			},
			{
				"postedBy": "Bryan Stark",
				"createdDate": "24/05/2017",
				"review": "This is the best phone till date.",
				"rating": "4/5"
			},
			{
				"postedBy": "Tyrion Lannister",
				"createdDate": "30/08/2010",
				"review": "This is the best phone till date with whopping 3GB of Ram",
				"rating": "1/5"
			}
		]
	},
	{
		"product_name": "Moto G5 Plus",
		"url": "https://http2.mlstatic.com/D_901525-MCO25457515389_032017-O.jpg",
		"price": 150,
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		"ratingsNo": 500,
		"reviewNo": 2,
		"reviewDetails": [{
				"postedBy": "John Snow",
				"createdDate": "24/05/2015",
				"review": "This is the best phone till date with whopping 3GB of Ram",
				"rating": "5/5"
			},
			{
				"postedBy": "Bryan Stark",
				"createdDate": "24/05/2017",
				"review": "This is the best phone till date.",
				"rating": "4/5"
			}
		]
	},
	
	{
		"product_name": "Google Pixel",
		"url": "https://www.pc-tablet.co.in/wp-content/uploads/2016/10/google-Pixel-and-pixel-xl.jpg",
		"price": 500,
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		"ratingsNo": 10500,
		"reviewNo": 2,
		"reviewDetails": [{
				"postedBy": "John Snow",
				"createdDate": "24/05/2015",
				"review": "This is the best phone till date with whopping 3GB of Ram",
				"rating": "5/5"
			},
			{
				"postedBy": "Bryan Stark",
				"createdDate": "24/05/2017",
				"review": "This is the best phone till date.",
				"rating": "4/5"
			}
		]
	},
	{
		"product_name": "Google Nexus",
		"url": "https://www.google.com/nexus/images/landing/nexus-home-marshmallow.jpg",
		"price": 500,
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		"ratingsNo": 10500,
		"reviewNo": 2,
		"reviewDetails": [{
				"postedBy": "John Snow",
				"createdDate": "24/05/2015",
				"review": "This is the best phone till date with whopping 3GB of Ram",
				"rating": "5/5"
			},
			{
				"postedBy": "Bryan Stark",
				"createdDate": "24/05/2017",
				"review": "This is the best phone till date.",
				"rating": "4/5"
			}
		]
	}
	
	]
};
    return this.productsList;
  }

  getFashion(){
    this.productsList = {
	"products": [{
			"product_name": "Lorem ipsum jackets",
			"url": "http://www.womantospecial.com/wp-content/uploads/collared-black-leather-jacket-model-arched-leather-jackets.jpg",
			"price": 100,
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			"ratingsNo": 100,
			"reviewNo": 3,
			"sex": "female",
			"reviewDetails": [{
					"postedBy": "John Snow",
					"createdDate": "24/05/2015",
					"review": "This is the best shoes till date",
					"rating": "5/5"
				},
				{
					"postedBy": "Bryan Stark",
					"createdDate": "24/05/2017",
					"review": "This is the best shoes.",
					"rating": "4/5"
				},
				{
					"postedBy": "Tyrion Lannister",
					"createdDate": "30/08/2010",
					"review": "I didn't like these shoes",
					"rating": "1/5"
				}
			]
		},
		{
			"product_name": "Lorem ipsum jackets",
			"url": "http://thebestfashionblog.com/wp-content/uploads/2013/06/Leather-Jackets-in-Anine-Bing-Spring-Summer-2013-Lookbook-4.jpg",
			"price": 150,
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			"ratingsNo": 500,
			"reviewNo": 2,
			"sex": "female",
			"reviewDetails": [{
					"postedBy": "Sansa",
					"createdDate": "24/05/2015",
					"review": "This is the best purse",
					"rating": "5/5"
				},
				{
					"postedBy": "Arya Stark",
					"createdDate": "24/05/2017",
					"review": "Cheap and elegant purse.",
					"rating": "4/5"
				}
			]
		},
		{
			"product_name": "Lorem ipsum jackets",
			"url": "https://aninesworld.files.wordpress.com/2016/06/anine-bing-leather-jacket-outfit-look-1.jpg",
			"price": 100,
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			"ratingsNo": 100,
			"reviewNo": 2,
			"sex": "female",
			"reviewDetails": [{
					"postedBy": "Sansa",
					"createdDate": "24/05/2015",
					"review": "This is the best jacket till date",
					"rating": "5/5"
				},
				{
					"postedBy": "Lady Stark",
					"createdDate": "24/05/2017",
					"review": "This is the best jacket.",
					"rating": "4/5"
				}
			]
		},
		{
			"product_name": "Lorem ipsum jackets",
			"url": "https://s-media-cache-ak0.pinimg.com/736x/ff/05/8e/ff058e4691f85196d18c2d931face556.jpg",
			"price": 250,
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			"ratingsNo": 100,
			"reviewNo": 2,
			"sex": "male",
			"reviewDetails": [{
					"postedBy": "Bryan Stark",
					"createdDate": "24/05/2015",
					"review": "This is the best jacket till date",
					"rating": "5/5"
				},
				{
					"postedBy": "Tyrion Lannister",
					"createdDate": "24/05/2017",
					"review": "This is the best jacket.",
					"rating": "4/5"
				}
			]
		},
		{
			"product_name": "Lorem ipsum jackets",
			"url": "https://ae01.alicdn.com/kf/HTB1DtdeIVXXXXcEXVXXq6xXFXXXy/2015-Explosion-Models-Fight-Skin-Cowboy-Leather-Motorcycle-Jacket-Male-Stand-up-Collar-Denim-Jackets-Free.jpg",
			"price": 250,
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			"ratingsNo": 100,
			"reviewNo": 2,
			"sex": "male",
			"reviewDetails": [{
					"postedBy": "Bryan Stark",
					"createdDate": "24/05/2015",
					"review": "This is the best jacket till date",
					"rating": "5/5"
				},
				{
					"postedBy": "Tyrion Lannister",
					"createdDate": "24/05/2017",
					"review": "This is the best jacket.",
					"rating": "4/5"
				}
			]
		}

	]
};



    return this.productsList;
  }

}
