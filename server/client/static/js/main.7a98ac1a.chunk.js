(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{65:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),i=n.n(s),a=n(18),r=n.n(a),o=(n(65),n(66),n(67),n(20)),j=n(8),l=n(105),u=n(106),b=n(104),O=n(54),A=n.n(O),d=function(){var e=A.a.create({baseURL:""});return e.interceptors.response.use((function(e){return e.data}),(function(e){return console.log(e),Promise.reject(e)})),e},p=n(5),h=n(99),x=n(100),g=n(98),m=function(){return Object(c.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(c.jsx)(g.a,{animation:"border",role:"status"})})},w=function(e){var t=e.location,n=Object(s.useState)(!0),i=Object(p.a)(n,2),a=i[0],r=i[1],o=Object(s.useState)([]),j=Object(p.a)(o,2),l=j[0],u=j[1],b=Object(s.useState)([]),O=Object(p.a)(b,2),A=O[0],g=O[1];Object(s.useEffect)((function(){(function(e){return d().get("/gears?lat=".concat(e.lat,"&lng=").concat(e.lng))})(t).then((function(e){g(e[0].essentials),u(e),r(!1)}))}),[]);var w=function(e,t){var n=(e+t)/2;return Math.round(10*n)/10},y=function(e){var t=[];return e.rain&&t.push(Object(c.jsxs)("div",{className:"daily-gear",children:[Object(c.jsx)(h.a,{children:Object(c.jsx)(x.a,{children:Object(c.jsx)("h3",{children:"You will need these items for the rain "})})}),Object(c.jsx)(h.a,{children:e.rain&&e.rain.map((function(e){return Object(c.jsxs)(x.a,{sm:6,md:4,children:[Object(c.jsx)("img",{className:"gear-img",src:e.img,alt:e.name}),Object(c.jsx)("p",{children:e.name})]},e.name)}))})]})),e.cold&&t.push(Object(c.jsxs)("div",{className:"daily-gear",children:[Object(c.jsx)(h.a,{children:Object(c.jsx)(x.a,{children:Object(c.jsx)("h3",{children:"You will need these items for the cold "})})}),Object(c.jsx)(h.a,{children:e.cold&&e.cold.map((function(e){return Object(c.jsxs)(x.a,{sm:6,md:4,children:[Object(c.jsx)("img",{className:"gear-img",src:e.img,alt:e.name}),Object(c.jsx)("p",{children:e.name})]},e.name)}))})]})),e.warm&&t.push(Object(c.jsxs)("div",{className:"daily-gear",children:[Object(c.jsx)(h.a,{children:Object(c.jsx)(x.a,{children:Object(c.jsx)("h3",{children:"You will need these items for the warm"})})}),Object(c.jsx)(h.a,{children:e.warm&&e.warm.map((function(e){return Object(c.jsxs)(x.a,{sm:6,md:4,children:[Object(c.jsx)("img",{className:"gear-img",src:e.img,alt:e.name}),Object(c.jsx)("p",{children:e.name})]},e.name)}))})]})),e.sunny&&t.push(Object(c.jsxs)("div",{className:"daily-gear",children:[Object(c.jsx)(h.a,{children:Object(c.jsx)(x.a,{children:Object(c.jsx)("h3",{children:"You will need these items for the sun"})})}),Object(c.jsx)(h.a,{children:e.sunny&&e.sunny.map((function(e){return Object(c.jsxs)(x.a,{sm:6,md:4,children:[Object(c.jsx)("img",{className:"gear-img",src:e.img,alt:e.name}),Object(c.jsx)("p",{children:e.name})]},e.name)}))})]})),t};return a?Object(c.jsx)(m,{}):Object(c.jsxs)("div",{className:"grid-container",children:[Object(c.jsx)(h.a,{children:Object(c.jsx)(x.a,{children:Object(c.jsx)("h3",{children:" Don't Forget Your Esentails "})})}),Object(c.jsx)(h.a,{children:A&&A.map((function(e){return Object(c.jsxs)(x.a,{sm:6,md:4,children:[Object(c.jsx)("img",{className:"gear-img",src:e.img,alt:e.name}),Object(c.jsx)("p",{children:e.name})]},e.name)}))}),l&&l.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)(h.a,{className:"daily-gear-header",children:[Object(c.jsx)(x.a,{sm:6,md:4,children:Object(c.jsx)("h3",{children:(t=e.weather.dt,JSON.stringify(new Date(1e3*t)).slice(1,11))})}),Object(c.jsx)(x.a,{sm:6,md:4,children:Object(c.jsxs)("h3",{children:["Avg.",w(e.weather.temp.min,e.weather.temp.max)]})}),Object(c.jsx)(x.a,{sm:6,md:4,children:Object(c.jsxs)("h3",{children:[e.weather.weather[0].main," "]})})]}),y(e)]},e.weather.dt);var t}))]})},y=n(101),K=n(107),f=n(102),v=n(103),S=n(12),k=n.n(S),z=n.p+"static/media/wildAnimal.5577baf1.png",B="data:image/png;base64,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",E=function(){return k.a.icon({iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA6lBMVEUAAAA4kO44kO44kO44kO84kO84kO86kO44mOQ/jv84kO44kO44kO84kO84kO84j+44kO46k+84kO44kO44kO83kO44kO44kO44kO44kO44kO04kO43kO5Onf83ke43kO83ke44kO42j/A7kfA3ke44kO43ke83kO46j+41je04kO44kO44kO44kO75+fnO4vZpq/Hv9PiTwvNLmu9Ime/09vmAt/JfpfFQne/r8fjS5PeXxPR4s/J0sfE/lO89k+/3+Pnl7vjH3va/2vaozfWrz/SiyvRvrvFVoPDi7fjh7Pi61/WMvvKMvfIAhaOUAAAALXRSTlMA/fr2u+upDgkG17GZfF46NB7w21At0sy/pJBkRAOUi4ZYIRV4c2tJJR3k48jHmEDsAAACNElEQVRYw6XW53LbMBAE4CWp3qttWXLvSRayZBX3Ete093+dzGgyIY8EIIj+/h+Gd3vAEEbN2nam3fL9VjuzXWtiRc1qiUKpusoZ3Z7PBK/cgJv8pke93gEcdLI0ynawzNYmrXa2YFXMcYlyARaFDS6VKVq+P0cHZXMXu3SyC4MTj068gSH/L3T0NQ+dZIAXs5vX15vZRTJMaJz5lG6Hj2rhcXhHyW8iaZvCx1BFDD8obCIhHzDq/UoJo3dGBckp9Bl1PlUx03NG9REndvDySiVcXYp9RExBdPBdaTyLHgqQBqIBpSWaGEA6YsSz0vrFiCNIFYbuR0prdM9QBVJGdGBwbpniOkMzZTBj6BukEkNjZTBmqARpjaHfyuAPQ+uWPbpVBreWGZQZmiuDOUM5S4x80tc/0RLjMSNelNYLI44h1cVdmurqp+I21SEVPEa8KY03RngFWDaJD8Nk/fU9RYpxVfmc/ojX/5RPaxVxXQqT2JMwlPXsIqFN4eFmFLmH4wcKbSRVGTMZX//rfjxhzCGSDgImTOZ3d/MJE/wDaOTorAedBp01oFWmozKQ7hNkhumnkIPJWUAHQRNGVTo4hFmxzaVKRVjUPS7h1WG1k+IXTSis0WqtiCVOW9YEulhqjxY1OKjQqAIXxQwNNopwkjcMspSHo/0sNbKncNYImBDUsYKOzxi/A3zmBG8PK6p5or4GfOqEPlLY8//330cqgxYXghOk1FjsQ6uO1PZz2WxvHzZ/AVnTkKU1svhYAAAAAElFTkSuQmCC",iconSize:[32,32]})},C=n(55),T=function(e){var t=e.location,n=Object(s.useState)(0),i=Object(p.a)(n,2),a=i[0],r=i[1],o=Object(s.useState)(!0),j=Object(p.a)(o,2),l=j[0],u=j[1],b=Object(s.useState)(!1),O=Object(p.a)(b,2),A=O[0],h=O[1],x=Object(s.useState)(2),g=Object(p.a)(x,2),w=g[0],S=g[1],B=Object(s.useState)([]),T=Object(p.a)(B,2),I=T[0],P=T[1];Object(s.useEffect)((function(){S(10),h(!0),d().get("/danger-messages").then((function(e){P(e),u(!1)}))}),[a]);var N=function(){(function(e,t,n,c,s){return d().post("/danger-messages",{title:e,msg:t,lat:n,lng:c,createdAt:s})})("Alert","Wild Animal Was Spotted Here!",t.lat,t.lng,Date.now()).then((function(e){r(a+1)}))};return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"map",children:l?Object(c.jsx)(m,{}):Object(c.jsxs)(y.a,{center:[t.lat,t.lng],zoom:w,children:[Object(c.jsx)(K.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),A?Object(c.jsx)(f.a,{position:[t.lat,t.lng],icon:E()}):"",I&&I.map((function(e,t){return Object(c.jsxs)(f.a,{position:[e.Latitude,e.Longitude],icon:k.a.icon({iconUrl:z,iconSize:[50,50],iconAnchor:[25,25]}),children:["(",Object(c.jsxs)(v.a,{children:[Object(c.jsxs)("h4",{children:[" ",e.Title]}),Object(c.jsx)("p",{children:e.Message})]}),"),"]},t)}))]})}),Object(c.jsx)(C.a,{className:"danger-bnt",variant:"warning",size:"lg",onClick:function(){N()},children:"add Danger Point at my location"})]})},I=function(){var e=Object(s.useState)(!0),t=Object(p.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)(null),r=Object(p.a)(a,2),o=r[0],j=r[1];return Object(s.useEffect)((function(){d().get("/news").then((function(e){j(e.response.docs),i(!1)}))}),[]),n?Object(c.jsx)(m,{}):Object(c.jsxs)("div",{className:"news-container",style:{overflowY:"auto"},children:[Object(c.jsx)(h.a,{children:Object(c.jsx)(x.a,{children:Object(c.jsx)("h1",{children:"Latest News From NY Times"})})}),o&&o.map((function(e){return Object(c.jsx)(h.a,{style:{padding:"20px 0 20px"},children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)("h5",{children:e.headline.main}),Object(c.jsx)("p",{children:e.snippet}),Object(c.jsx)("a",{href:e.web_url,rel:"noopener noreferrer",target:"_blank",children:"Read full article"})]})},e.headline.main)}))]})},P=function(e){var t=e.location,n=Object(s.useState)(!0),i=Object(p.a)(n,2),a=i[0],r=i[1],o=Object(s.useState)(!1),j=Object(p.a)(o,2),l=j[0],u=j[1],b=Object(s.useState)(2),O=Object(p.a)(b,2),A=O[0],h=O[1],x=Object(s.useState)(null),g=Object(p.a)(x,2),w=g[0],S=g[1],z=Object(s.useState)(null),B=Object(p.a)(z,2),C=B[0],T=B[1],I=[t.lat,t.lng];Object(s.useEffect)((function(){h(10),u(!0),function(e){return d().get("/hiking-trails?lat=".concat(e.lat,"&lng=").concat(e.lng))}(t).then((function(e){S(e),r(!1)}))}),[]);var P=function(e){(function(e){return d().get("/get-conditions?id=".concat(e))})(e).then((function(e){T(e)}))};return a?Object(c.jsx)(m,{}):Object(c.jsxs)("div",{children:[Object(c.jsxs)(y.a,{center:I,zoom:A,scrollWheelZoom:!1,children:[Object(c.jsx)(K.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l?Object(c.jsx)(f.a,{position:I,icon:E()}):"",a?Object(c.jsx)(m,{}):w&&w.trails.map((function(e){return Object(c.jsx)(f.a,{position:[e.latitude,e.longitude],icon:k.a.icon({iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAnFBMVEUAAAApKywpKyw5OTkpKywpKywpKywpKywpKywoKywpKywoKiwoKyspKywpKysoKysoKywiJycpKywoKywoKywoKiwpKiwsLCwoKywpKywpKywpKywpKiwpKyspKywpKyspLCwqLCwpKiwpKyspKywpKysoKyspKyspKiwpKispKywpKywoKywmLS0mKyspKywpKyspKywrKyspKywejkuTAAAAM3RSTlMAjMwE9ObIYfrQqn4utndyPQfEu7BmWgvr3NTBn4VuXSYVpJCCalRNRzb315kaD/Dg2B7I6Z0HAAACH0lEQVRYw6XX2XaCMBAG4NHIIlpZVLC4L0Xca/P+79bThjgB1JDkv4KcwweGzBBBknja6UQOAc0Qj/5nFGoCO1pkC1q5HjngrhUuW268vwxC2NNHMmicDB97icBXc6DFr2lDjsBeA+hCOOHHt6sWAGN+7IMeAD122AJdAPpn2z4fQA8g2dnbBmxUB7BStowTPQDzYQrQzBTwTIGuKfBpCtCxKdBZGQK0TQwBujMFaGAKfF4NATrTB9xiInns7VoN2NjVkVOoBAxWnepQrgTsYVwbUgJWAF7llbz9CYPqHBKAcGe3eSx6usC7HCrAHcqZS1vURxkYKQPrtAS0lAFI5pYAOLU9wxDksREIdIAfiqmu214TwMHrJ6ADbATgpwZM5YA4iVZfHehTMbdAGfArTTkvL/UIoNlaHHLBjdUAcmM3DrGufBGwZUDw+KwvnmzzfDnQw7vGLp+HRAGI2DX/ry/n7eyAQFtWS664BA8TzhVZSIG4aMbF6YydXhoDl0m5jEfsNGkKkCll4TXAzo/A8yXZscyre7Muq4imQODinkIsrFQA0nf9kNfhEnjYe8TlO34HkGHtWxzy3ozASboGaZrgS0ERAdkEHPu13rAV2t1dOgFOvbJ6CLzeN44oX4MY/s9tIQWwkd0TcXTJBmMceAlkOAH1Dp8LwPcLYIX72trH2r1irT0FsO5mT2dmDk0A4kfRgtRGB/bQER/UOoOQX1ru2Nplf4QgAAAAAElFTkSuQmCC",iconSize:[32,32]}),children:Object(c.jsxs)(v.a,{children:[Object(c.jsxs)("h4",{children:[" ",e.name]}),Object(c.jsx)("p",{children:e.summary})]})},e.id)}))]}),Object(c.jsx)("div",{className:"sidebar-container",children:w&&w.trails.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h4",{children:[" ",e.name]}),""===e.summary?"":Object(c.jsx)("p",{children:e.summary}),""===e.imgSmall?"":Object(c.jsx)("div",{className:"service-container",children:Object(c.jsx)("img",{src:e.imgSmall,alt:"trail"})}),function(){return P(e.id)},null!==C&&C.id===e.id?Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:[" Trail Condition : ",C.conditionStatus]}),Object(c.jsxs)("p",{children:["Condition Details : ",C.conditionDetails]}),Object(c.jsxs)("p",{children:["More information : ",Object(c.jsx)("a",{href:C.url,children:" here"}),C.conditionStatus]})]}):Object(c.jsx)("p",{children:"NO Conditions provided "})]},e.id)}))})]})},N=function(e){var t=e.services,n=Object(s.useState)(null),i=Object(p.a)(n,2),a=i[0],r=i[1],o=function(e){(function(e){return d().get("/services?id=".concat(e))})(e).then((function(e){r(e.response)}))};return Object(c.jsx)("div",{className:"sidebar-container",children:t&&t.groups[0].items.map((function(e){return Object(c.jsxs)("div",{onClick:function(){o(e.venue.id)},children:[Object(c.jsxs)("h4",{children:[" ",e.venue.name]}),Object(c.jsx)("p",{children:e.venue.categories[0].name}),a&&a.id===e.venue.id?Object(c.jsxs)("div",{className:"service-container",children:[Object(c.jsx)("p",{children:a.location.city}),Object(c.jsx)("h4",{className:"rating",children:a.bestPhoto.source.rating}),Object(c.jsx)("img",{src:a.bestPhoto.prefix+a.bestPhoto.width+"x"+a.bestPhoto.height+a.bestPhoto.suffix})]}):""]},e.venue.id)}))})},F=function(e){var t=e.location,n=Object(s.useState)(!0),i=Object(p.a)(n,2),a=i[0],r=i[1],o=Object(s.useState)(!1),j=Object(p.a)(o,2),l=j[0],u=j[1],b=Object(s.useState)(2),O=Object(p.a)(b,2),A=O[0],h=O[1],x=Object(s.useState)({}),g=Object(p.a)(x,2),w=g[0],S=g[1],z=[t.lat,t.lng];return Object(s.useEffect)((function(){h(8),u(!0),function(e){return d().get("/nature-preserves?lat=".concat(e.lat,"&lng=").concat(e.lng))}(t).then((function(e){S(e.response),r(!1)}))}),[]),a?Object(c.jsx)(m,{}):Object(c.jsxs)("div",{children:[Object(c.jsxs)(y.a,{center:z,zoom:A,children:[Object(c.jsx)(K.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l?Object(c.jsx)(f.a,{position:z,icon:E()}):"",a?Object(c.jsx)(m,{}):w&&w.groups[0].items.map((function(e){return Object(c.jsx)(f.a,{position:[e.venue.location.lat,e.venue.location.lng],icon:k.a.icon({iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAjVBMVEUAAAAqKywpKywpKywlLy8pKyspKywpKysoKywoKywpKywsNTUpKyssMTEpKywoKywoKywpKyspKywpKywpKyspKiwoKysoLCwpKyspKysqKiwpKywqKiopKywoKywpKywpKywoKywoKiwpKysoKywqKysnKy0mJiYpKywpKywpKi0qKywpKiwtLS0pKyylP2CPAAAALnRSTlMA3cz6COD0n2bShQQvD+S3kkzHrJk4WjTZbkg+GPDq5ta+eVR1Ix0N9olDKqMRg5wbcwAAAjFJREFUWMPtll13ojAQhifyUSmCCEKx+FHU1mq78/9/3ga2bKDvBC682bOnz6XvOZN5MiaBgCIOFiSyCOKCJnnzmYNQSsKA+f2Vpliy5iglR9YsaYKCNd1C0JrmRKNEMbNloSW3HCIaI2GNuNCpSxIa4clhlhe6xNyRk5Vwxn9JLK2ZGQlsuEcOrXVsyMJ2xz1mvYXCtJ/4byST8YANtNaRkcizjnAhbE2zIgFXMVsWyr4n3oWQKwOrrjXgSsCHwywv5CpMHDywKQs8NsmjlKT0jYolfFc34ItRRUNyuUBIFEIB+Q99DpQabMNOqbTdxVWq1GCOjlLBWbyyBgXiyCSRNyjwRCJuwAPWJloPkxeXAGm3n7vkBtOxC4AECIAECICEEUAJFECJm/UvhgIoAaVBAgRAwi2Z7RIogBK5I0qggFUikSVAwCoR7WwSKIDcYJAg4fo8Qm0uVTjsEwXMM3m2HXZNd2AVI+/652XzUD9ApL4Ou2HO9pvvF7Y4hztV1AhayzDDxP+gAe6MRRIzJKhte3zxaXj1LbXxVUP2W9wffN+2h/EpUmap/UVY8wibZgyelNSh+X4zyLOsxNN2xq8P635fxdo5aS4lT5BY56wiHX3yJCvr4/lJVPA0h2a/PTEqSDGAHLsvVUBReV+BkvJaTVGumzmkUlTn9P9RzFsqTKo/SUEjmGk/QNDdi95PgX+xwCKb9XG4ZT8D9tziDH7MFlTyXbzQnu/iQKeY7yA+/QaG0n2YaoIV4gAAAABJRU5ErkJggg==",iconSize:[32,32]}),children:Object(c.jsxs)(v.a,{children:[Object(c.jsxs)("h4",{children:[" ",e.venue.name]}),Object(c.jsxs)("p",{children:[" ",e.venue.categories[0].name]})]})},e.venue.id)}))]}),Object(c.jsx)(N,{services:w})]})},D=function(e){var t=e.location,n=Object(s.useState)(!0),i=Object(p.a)(n,2),a=i[0],r=i[1],o=Object(s.useState)(!1),j=Object(p.a)(o,2),l=j[0],u=j[1],b=Object(s.useState)(2),O=Object(p.a)(b,2),A=O[0],h=O[1],x=Object(s.useState)({}),g=Object(p.a)(x,2),w=g[0],S=g[1],z=[t.lat,t.lng];return Object(s.useEffect)((function(){h(8),u(!0),function(e){return d().get("/campgrounds?lat=".concat(e.lat,"&lng=").concat(e.lng))}(t).then((function(e){S(e.response),r(!1)}))}),[]),a?Object(c.jsx)(m,{}):Object(c.jsxs)("div",{children:[Object(c.jsxs)(y.a,{center:z,zoom:A,children:[Object(c.jsx)(K.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l?Object(c.jsx)(f.a,{position:z,icon:E()}):"",a?Object(c.jsx)(m,{}):w&&w.groups[0].items.map((function(e){return Object(c.jsx)(f.a,{position:[e.venue.location.lat,e.venue.location.lng],icon:k.a.icon({iconUrl:B,iconSize:[32,32]}),children:Object(c.jsxs)(v.a,{children:[Object(c.jsxs)("h4",{children:[" ",e.venue.name]}),Object(c.jsxs)("p",{children:[" ",e.venue.categories[0].name]})]})},e.venue.id)}))]}),Object(c.jsx)(N,{services:w})]})},X=function(e){var t=e.location,n=Object(s.useState)(!0),i=Object(p.a)(n,2),a=i[0],r=i[1],o=Object(s.useState)(!1),j=Object(p.a)(o,2),l=j[0],u=j[1],b=Object(s.useState)(2),O=Object(p.a)(b,2),A=O[0],h=O[1],x=Object(s.useState)({}),g=Object(p.a)(x,2),w=g[0],S=g[1],z=[t.lat,t.lng];return Object(s.useEffect)((function(){h(8),u(!0),function(e){return d().get("/outdoor-stores?lat=".concat(e.lat,"&lng=").concat(e.lng))}(t).then((function(e){S(e.response),r(!1)}))}),[]),a?Object(c.jsx)(m,{}):Object(c.jsxs)("div",{children:[Object(c.jsxs)(y.a,{center:z,zoom:A,children:[Object(c.jsx)(K.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l?Object(c.jsx)(f.a,{position:z,icon:E()}):"",a?Object(c.jsx)(m,{}):w&&w.groups[0].items.map((function(e){return Object(c.jsx)(f.a,{position:[e.venue.location.lat,e.venue.location.lng],icon:k.a.icon({iconUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAbFBMVEUAAAAwMDAoKywpKywnLS0pKS0nJycpKywpKywpKywpLCwqKyspKyspKyspKywpKysoKysqKiwpKiopKywpKywpKiwpKywoKywoKysoLCwqMzMpKywpKywpKysoLS0pKywoLCwpKywqLCwpKywRxbwyAAAAI3RSTlMABZHzKCwT5bjv041T4a6OZUck0supimBfPQr127sc1ZiWblAWvpIAAADySURBVFjD7dHZjoJAEIXh0wtgs/QAIzgy6iz1/u84mRg7ptRoV98Q5buqEPKHcLCYl66hBzUdrugNPezT4oJaU4S1AjdSlBHMliKx35A3FKnIcW6gaB5nWhJoZQvyLfmCoi1HEhrDglIdX1C05UAJPFtQsuWOkuxgKInDFyUpoSlJhYySWKR9ggag9hSsVnH3XuG/oENPxd44yt5KY96rLOouK4v5mdoPdbrV5v4dDL9b22ebH0dU6Nrmua11cftuqu4wTbb+DgESesYAGPZysASWwLMHuFcKGFnAhQdeFvDhgXWSgOsRHAYXG3C+x2Iu/gDWWixSg6NyggAAAABJRU5ErkJggg==",iconSize:[32,32]}),children:Object(c.jsxs)(v.a,{children:[Object(c.jsxs)("h4",{children:[" ",e.venue.name]}),Object(c.jsxs)("p",{children:[" ",e.venue.categories[0].name]})]})},e.venue.id)}))]}),Object(c.jsx)(N,{services:w})]})};var U=function(){Object(s.useEffect)((function(){new Promise((function(e){navigator.geolocation.getCurrentPosition((function(t){e({lat:t.coords.latitude,lng:t.coords.longitude})}),(function(){e(fetch("https://ipapi.co/json").then((function(e){return e.json()})).then((function(e){return{lat:e.latitude,lng:e.longitude}})))}))})).then((function(e){!function(e){var t=JSON.stringify(e);localStorage.setItem("",t)}(e)}))}),[]);var e=function(){var e=localStorage.getItem("");return JSON.parse(e)}();return Object(c.jsxs)(o.a,{children:[Object(c.jsxs)(l.a,{className:"navbar",expand:"lg",bg:"dark",variant:"dark",fixed:"top",sticky:"top",children:[Object(c.jsxs)(l.a.Brand,{as:o.b,className:"navbar-brand",to:"/",children:[Object(c.jsx)("img",{className:"logo",src:B,alt:"logo"}),"OUTDOORS GYPSY"]}),Object(c.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(c.jsx)(l.a.Collapse,{id:"responsive-navbar-nav",children:Object(c.jsxs)(u.a,{className:"ml-auto",children:[Object(c.jsxs)(b.a,{title:"Services",id:"collasible-nav-dropdown",children:[Object(c.jsx)(b.a.Item,{as:o.b,to:"trails",children:"Trails"}),Object(c.jsx)(b.a.Divider,{}),Object(c.jsx)(b.a.Item,{as:o.b,to:"preserves",children:"Nature Preserves"}),Object(c.jsx)(b.a.Divider,{}),Object(c.jsx)(b.a.Item,{as:o.b,to:"campgrounds",children:"Campground"}),Object(c.jsx)(b.a.Divider,{}),Object(c.jsx)(b.a.Item,{as:o.b,to:"outdoor-stores",children:"Outdoor Stores"})]}),Object(c.jsx)(u.a.Link,{as:o.b,to:"danger-identifier",children:"Danger Identifier"}),Object(c.jsx)(u.a.Link,{as:o.b,to:"news",children:"News"})]})})]}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",children:Object(c.jsx)(w,{location:e})}),Object(c.jsx)(j.a,{path:"/danger-identifier",children:Object(c.jsx)(T,{location:e})}),Object(c.jsx)(j.a,{path:"/events"}),Object(c.jsx)(j.a,{path:"/trails",children:Object(c.jsx)(P,{location:e})}),Object(c.jsx)(j.a,{path:"/preserves",children:Object(c.jsx)(F,{location:e})}),Object(c.jsx)(j.a,{path:"/campgrounds",children:Object(c.jsx)(D,{location:e})}),Object(c.jsx)(j.a,{path:"/outdoor-stores",children:Object(c.jsx)(X,{location:e})}),Object(c.jsx)(j.a,{path:"/news",children:Object(c.jsx)(I,{})})]})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(U,{})}),document.getElementById("root")),R()}},[[93,1,2]]]);
//# sourceMappingURL=main.7a98ac1a.chunk.js.map