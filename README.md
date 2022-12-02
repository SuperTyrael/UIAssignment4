# Development

### Link to Deployed Website
If you used the stencil code, this is `https://supertyrael.github.io/UIAssignment4/`

### Goal and Value of the Application
The goal of this web application is to construct a bakery online shop that customers can browse breads, cakes and pastries avaliable in bakery shop. The multi-functional aggregator in this web application provides users with the exciting way to pick their ideal products in bakery shop. No matter they like bread or cake, or have special food allergy, they can always find their product. Special designed favorite function can help users to build their wishlist and know the total budget in time.
### Usability Principles Considered
Availability and accessibility is considered in this web application, the whole page is responsive which is empowered by the Material UI framework, each images have corresponding alternative text for disabled people, and the minimalist design style with card components makes users easy to understand.
Clarity of the web application is also one of the most important deisgn factor. The minimalist design guarantees the simplicity and consistency of the whole page, card components with well-designed layout display rich information of product and the sort and filter group is easy for users to understand its usage. 

### Organization of Components
This web application mainly consists of two components, the sort and filter group and the product table. The sort and filter group is consists of different categories of buttons. The product table is combined with well structured product info cards, each card demonstrate detailed information of each product.
### How Data is Passed Down Through Components
Data firstly read and parsed from json file and stored into bakeryData list. Then filter function and sort function are implemented which are used to pick specific data from bakeryData. Then the filted and sorted data will be passed to the BakeryItem where a render list is constructed for the display of passed data. States and handlers about add/remove favorite items are implemented in FilterTable, and the fav state which is a list of added favorite data and add/remove handlers are passed to the bakerItems for usage.
### How the User Triggers State Changes
The state tracks the filter and sort group's states and also the favorite list's states. When user change the sort or filter condition, their action will be recored and the displayed data will be also changed. The add/remove favorite works as same as the group.
