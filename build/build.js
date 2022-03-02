/*! For license information please see build.js.LICENSE.txt */

`},6332:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(4917);a.default=({children:e})=>r.default.createElement(c.AccordionWrapper,null,e)},7687:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.AccordionButtonStyles=void 0;const r=n(t(9163));a.AccordionButtonStyles=r.default.button`
  border: 0;
  width: 100%;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  background: transparent;
  justify-content: space-between;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  padding: ${({theme:e})=>e.spacing.md};
  
  &:hover {
    cursor: pointer;
    background: ${({theme:e})=>e.colors.lightGray};
  }
`},8419:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(7625),i=t(1436),o=t(7687);a.default=({title:e,setOpen:a,isOpen:t})=>r.default.createElement(o.AccordionButtonStyles,{onClick:()=>a(!t)},e,r.default.createElement(c.FontAwesomeIcon,{size:"sm",icon:i.faChevronDown}))},3685:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.AccordionButton=void 0;var r=t(8419);Object.defineProperty(a,"AccordionButton",{enumerable:!0,get:function(){return n(r).default}})},7232:function(e,a,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(a,e,t);return r(a,e),a};Object.defineProperty(a,"__esModule",{value:!0});const i=c(t(7294));a.default=({children:e})=>{const[a,t]=(0,i.useState)(!1);return i.default.createElement("div",null,i.default.Children.map(e,((e,n)=>i.default.createElement(i.Fragment,{key:Math.random()},i.default.cloneElement(e,{id:n,setOpen:t,isOpen:a})))))}},2344:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.AccordionItem=void 0;var r=t(7232);Object.defineProperty(a,"AccordionItem",{enumerable:!0,get:function(){return n(r).default}})},1372:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(4962);a.default=({children:e,isOpen:a})=>r.default.createElement(c.Box,{py:a&&2,px:3},a&&e)},9658:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.AccordionPanel=void 0;var r=t(1372);Object.defineProperty(a,"AccordionPanel",{enumerable:!0,get:function(){return n(r).default}})},208:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.AccordionPanel=a.AccordionButton=a.AccordionItem=a.Accordion=void 0;const r=t(3685);Object.defineProperty(a,"AccordionButton",{enumerable:!0,get:function(){return r.AccordionButton}});const c=t(2344);Object.defineProperty(a,"AccordionItem",{enumerable:!0,get:function(){return c.AccordionItem}});const i=t(9658);Object.defineProperty(a,"AccordionPanel",{enumerable:!0,get:function(){return i.AccordionPanel}});var o=t(6332);Object.defineProperty(a,"Accordion",{enumerable:!0,get:function(){return n(o).default}})},2628:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(6149),i=t(8755),o=t(8299),s=t(4962),l=t(7625),u=t(1436),f=t(2504),d=t(652),m=t(3898),h=t(4597);a.default=()=>{const e=[{id:1,uri:"/profile",name:"My profile",icon:u.faUserCircle,iconColor:h.COLORS.gray},{id:2,uri:"/settings",name:"Settings",icon:u.faCog,iconColor:h.COLORS.gray},{id:3,uri:"/support",name:"Support",icon:u.faLifeRing,iconColor:h.COLORS.gray},{id:4,uri:"/signin",name:"Logout",icon:u.faSignOutAlt,iconColor:h.COLORS.red,borderTop:`1px solid ${h.COLORS.lightGray}`}],a=r.default.createElement(s.Box,{display:"flex",alignItems:"center"},r.default.createElement(i.Avatar,{size:"xs",alt:"Michal",uri:"/img/users/user.jpg"}),r.default.createElement(o.Text,{mx:2},"Monic"),r.default.createElement(l.FontAwesomeIcon,{size:"lg",icon:u.faAngleDown}));return r.default.createElement(c.Dropdown,{customDropdownButton:a},r.default.createElement(f.DropdownMenu,null,e.map((e=>r.default.createElement(d.DropdownItem,{key:e.id,borderTop:null==e?void 0:e.borderTop},r.default.createElement(l.FontAwesomeIcon,{color:null==e?void 0:e.iconColor,icon:e.icon}),r.default.createElement(m.Link,{variant:"logout"===e.name.toLowerCase()?"danger":"dark",textDecoration:"none",href:e.uri},r.default.createElement(o.Text,{fontSize:"sm"},e.name)))))))}},8586:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.AccountMenu=void 0;var r=t(2628);Object.defineProperty(a,"AccountMenu",{enumerable:!0,get:function(){return n(r).default}})},9837:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.AlertContent=a.AlertWrapper=void 0;const r=n(t(9163)),c=t(7276);a.AlertWrapper=r.default.div`
  color: ${(0,c.mapToTheme)("alerts.text","variant")};
  padding: ${(0,c.mapToTheme)("alerts.size","variant")};
  border-radius: ${(0,c.mapToTheme)("alerts.background","variant")};
  background: ${(0,c.mapToTheme)("alerts.background","variant")};
`,a.AlertContent=r.default.div`

`},4686:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(9837);a.default=({text:e,variant:a,isShow:t=!0})=>r.default.createElement("div",null,t&&r.default.createElement(c.AlertWrapper,{variant:a},r.default.createElement(c.AlertContent,null,e)))},1979:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Alert=void 0;var r=t(4686);Object.defineProperty(a,"Alert",{enumerable:!0,get:function(){return n(r).default}})},3011:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.AvatarDefault=a.AvatarImg=a.AvatarWrapper=void 0;const r=n(t(9163)),c=t(7276),i=t(8005);a.AvatarWrapper=r.default.div`
  ${i.space};
  width: ${(0,c.mapToTheme)("avatarSize","size")};
  height: ${(0,c.mapToTheme)("avatarSize","size")};
`,a.AvatarImg=r.default.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 999px;
`,a.AvatarDefault=r.default.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  max-width: 100%;
  color: #000;
  object-fit: cover;
  border-radius: 999px;
  background: #ebeef2;
`},4442:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(3011);a.default=e=>{var{alt:a,uri:t,size:r}=e,o=n(e,["alt","uri","size"]);return console.log(t),c.default.createElement(i.AvatarWrapper,Object.assign({size:r},o),t?c.default.createElement(i.AvatarImg,{src:t,alt:a}):c.default.createElement(i.AvatarDefault,null,a))}},8755:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Avatar=void 0;var r=t(4442);Object.defineProperty(a,"Avatar",{enumerable:!0,get:function(){return n(r).default}})},7928:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.BoxWrapper=void 0;const r=n(t(9163)),c=t(8005),i=(0,c.compose)(c.background,c.border,c.boxShadow,c.color,c.layout,c.flexbox,c.grid,c.position,c.space,(0,c.system)({textAlign:!0,transform:!0,transition:!0,overflow:!0,textDecoration:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0}));a.BoxWrapper=r.default.div`
  ${i}
  &:hover {
    cursor:  ${({hoverEffect:e})=>e&&"pointer"};
    background: ${({theme:e,hoverEffect:a})=>a&&e.colors.lightGray};
  }
`},2503:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(7928);a.default=e=>{var{hoverEffect:a,children:t}=e,r=n(e,["hoverEffect","children"]);return c.default.createElement(i.BoxWrapper,Object.assign({hoverEffect:a},r),t)}},4962:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Box=void 0;var r=t(2503);Object.defineProperty(a,"Box",{enumerable:!0,get:function(){return n(r).default}})},1494:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ButtonIcon=a.ButtonWrapper=void 0;const r=n(t(9163)),c=t(8005),i=t(7276),o=t(7625),s=(0,c.compose)((0,c.system)({overflow:!0,textDecoration:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0,textAlign:!0}),c.space,c.layout,c.border,c.background);a.ButtonWrapper=r.default.button`
  ${s};
  cursor: pointer;
  letter-spacing: 0.05em;
  border: ${(0,i.mapToTheme)("button.border","variant")};
  border-radius: ${(0,i.mapToTheme)("borderRadius","variant")};
  color: ${(0,i.mapToTheme)("button.text","variant")};
  padding: ${(0,i.mapToTheme)("button.size","size")};
  font-size: ${(0,i.mapToTheme)("button.fontSize","size")};
  background: ${(0,i.mapToTheme)("button.background","variant")};
  &:hover {
    text-decoration: ${({variant:e})=>"link"===e&&"underline"};
    background:  ${(0,i.mapToTheme)("button.backgroundHover","variant")};
  }
`,a.ButtonIcon=(0,r.default)(o.FontAwesomeIcon)`
  margin-left: ${({isName:e})=>e&&".475rem"};
`},4397:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(1494);a.default=e=>{var{icon:a,size:t,name:r,onClick:o,variant:s,onMouseEnter:l,onMouseLeave:u,children:f}=e,d=n(e,["icon","size","name","onClick","variant","onMouseEnter","onMouseLeave","children"]);return c.default.createElement(i.ButtonWrapper,Object.assign({size:"link"===s?"link":t,variant:s,onClick:o,onMouseLeave:u,onMouseEnter:l},d),f||r,a&&c.default.createElement(i.ButtonIcon,{size:"lg",icon:a,isName:r}))}},1362:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Button=void 0;var r=t(4397);Object.defineProperty(a,"Button",{enumerable:!0,get:function(){return n(r).default}})},3303:function(e,a,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(a,e,t);return r(a,e),a};Object.defineProperty(a,"__esModule",{value:!0});const i=c(t(7294)),o=t(2238),s=t(2493),l=t(5450),u=t(6359);a.default=({view:e="withAsides",conversations:a})=>{const[t,n]=(0,i.useState)(0);return i.default.createElement(u.ChatWindow,{view:e},i.default.createElement(o.ChatAsideLeft,{currentConversation:t,conversations:a,setCurrentConversation:n}),i.default.createElement(l.ChatMain,{users:a[t].guest,messages:a[t].messages,writeText:null,addMessage:null,currentConversation:t}),i.default.createElement(s.ChatAsideRight,{conversationDetails:a[t].context}))}},9104:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ChatAsideLeftContent=a.ChatAsideLeftWrapper=void 0;const r=n(t(9163)),c=n(t(6498));a.ChatAsideLeftWrapper=r.default.div`
    grid-area: ChatAsideLeft;
    overflow-y: auto;
    overflow: hidden;
    display: none;
    @media ${c.default.device.xl} {
      display: block;
    }
`,a.ChatAsideLeftContent=r.default.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: ${({theme:e})=>e.borderRadius.md};
    background: ${({theme:e})=>e.colors.white};
    box-shadow:  ${({theme:e})=>e.boxShadows.sm};
    background: ${({theme:e})=>e.colors.white};
    box-shadow: ${({theme:e})=>e.boxShadows.sm};
`},7552:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(4597),i=t(4567),o=n(t(869)),s=t(9104);a.default=({currentConversation:e,conversations:a,setCurrentConversation:t})=>r.default.createElement(s.ChatAsideLeftWrapper,null,r.default.createElement(s.ChatAsideLeftContent,null,r.default.createElement(i.Heading,{p:3,type:"h6",color:c.COLORS.gray,title:"All messages",textTransform:"uppercase"}),r.default.createElement(o.default,{conversations:a,currentConversation:e,setCurrentConversation:t})))},2238:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ChatAsideLeft=void 0;var r=t(7552);Object.defineProperty(a,"ChatAsideLeft",{enumerable:!0,get:function(){return n(r).default}})},6362:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ChatAsideRightContent=a.ChatAsideRightWrapper=void 0;const r=n(t(9163)),c=n(t(6498));a.ChatAsideRightWrapper=r.default.div`
    grid-area: ChatAsideRight;
    overflow-y: auto;
    overflow: hidden;
    display: none;
    @media ${c.default.device.xxl} {
      display: block;
    }
`,a.ChatAsideRightContent=r.default.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: ${({theme:e})=>e.borderRadius.md};
    background: ${({theme:e})=>e.colors.white};
    box-shadow: ${({theme:e})=>e.boxShadows.sm};
`},5013:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(4597),i=t(4567),o=t(821),s=t(6362);a.default=({conversationDetails:e})=>r.default.createElement(s.ChatAsideRightWrapper,null,r.default.createElement(s.ChatAsideRightContent,null,r.default.createElement(i.Heading,{p:3,type:"h6",title:"Reservation details",color:c.COLORS.gray,textTransform:"uppercase"}),r.default.createElement(o.ConversationsDetails,{conversationDetails:e})))},2493:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ChatAsideRight=void 0;var r=t(5013);Object.defineProperty(a,"ChatAsideRight",{enumerable:!0,get:function(){return n(r).default}})},7913:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ChatMainContent=a.ChatMainWrapper=void 0;const r=n(t(9163));a.ChatMainWrapper=r.default.div`
    grid-area: ChatMain;
`,a.ChatMainContent=r.default.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    background: ${({theme:e})=>e.colors.white};
    box-shadow: ${({theme:e})=>e.boxShadows.sm};
`},4716:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(7913),i=t(3409),o=t(5203),s=t(8519);a.default=({users:e,messages:a,addMessage:t,writeText:n,currentConversation:l})=>r.default.createElement(c.ChatMainWrapper,null,r.default.createElement(c.ChatMainContent,null,r.default.createElement(i.ChatTop,{users:e}),r.default.createElement(o.MessageList,{messages:a,currentConversation:l}),r.default.createElement(s.MessageInput,{writeText:n,addMessage:t})))},5450:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ChatMain=void 0;var r=t(4716);Object.defineProperty(a,"ChatMain",{enumerable:!0,get:function(){return n(r).default}})},5874:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ChatTopWrapper=void 0;const r=n(t(9163));a.ChatTopWrapper=r.default.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
    border-bottom: ${({theme:e})=>`1px solid ${e.colors.lightGray}`};
`},5899:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(8755),i=t(4962),o=t(8299),s=t(5877),l=t(4754),u=t(4170),f=t(4597),d=t(1436),m=t(5874);a.default=({users:e})=>r.default.createElement(m.ChatTopWrapper,null,r.default.createElement(i.Box,{display:"flex",alignItems:"center"},r.default.createElement(c.Avatar,{size:"sm",alt:"user_name",uri:"/img/users/user2.jpg"}),r.default.createElement(i.Box,{ml:2,display:"flex",flexDirection:"column"},r.default.createElement(o.Text,{fontSize:l.FONT_SIZES.sm,fontWeight:s.FONT_WEIGHTS.bold},e.name),r.default.createElement(o.Text,{muted:!0,fontSize:l.FONT_SIZES.sm},"Last seen:"," ",e.firstName))),r.default.createElement(i.Box,{display:"flex",alignItems:"center"},r.default.createElement(u.Icon,{mx:2,name:d.faPhoneAlt,color:f.COLORS.gray}),r.default.createElement(u.Icon,{mx:2,name:d.faVideo,color:f.COLORS.gray}),r.default.createElement(u.Icon,{mx:2,name:d.faInfoCircle,color:f.COLORS.gray})))},3409:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ChatTop=void 0;var r=t(5899);Object.defineProperty(a,"ChatTop",{enumerable:!0,get:function(){return n(r).default}})},7340:function(e,a,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(a,e,t);return r(a,e),a},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ChatWindowWrapper=void 0;const o=c(t(9163)),s=i(t(6498));a.ChatWindowWrapper=o.default.div`
  display: grid;
  grid-gap: 1rem;
  height: 100%;
  overflow: hidden;
  grid-template-areas:
    "ChatMain";
  @media ${s.default.device.xl} {
    ${({view:e})=>{switch(e){case"fullWidth":return o.css`
      grid-template-areas:
        "ChatMain ChatMain ChatMain"
    `;case"withAsides":return o.css`grid-template-columns: 22rem 1fr;
      grid-template-areas:
          "ChatAsideLeft ChatMain";
        @media ${s.default.device.xxl} {
          grid-template-columns: 22rem 1fr 22rem;
            grid-template-areas:
          "ChatAsideLeft ChatMain ChatAsideRight";
      }
    `;case"withLeftAside":return o.css`
      grid-template-columns: 22rem 1fr;
        grid-template-areas:
          "ChatAsideLeft ChatMain ChatMain"
      `;case"withRightAside":return o.css`
        grid-template-columns: 1fr 22rem;
        grid-template-areas:
          "ChatAsideLeft ChatMain ChatAsideRight"
      `;default:return o.css`
      grid-template-areas:
        "ChatAsideLeft ChatMain ChatAsideRight"
    `}}};
  }
`},8417:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(7340);a.default=({view:e,children:a})=>r.default.createElement(c.ChatWindowWrapper,{view:e},a)},6359:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ChatWindow=void 0;var r=t(8417);Object.defineProperty(a,"ChatWindow",{enumerable:!0,get:function(){return n(r).default}})},6976:function(e,a,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(a,e,t);return r(a,e),a};Object.defineProperty(a,"__esModule",{value:!0});const i=c(t(7294)),o=t(4597),s=t(5877),l=t(8299),u=t(4962),f=t(8755),d=t(1362),m=t(7932),h=t(7837);a.default=()=>{const[e,a]=(0,i.useState)(!1);return i.default.createElement(i.default.Fragment,null,i.default.createElement(u.Box,{px:3},i.default.createElement(u.Box,{display:"flex",alignItems:"center"},i.default.createElement(f.Avatar,{mr:2,size:"lg",alt:"user_name",uri:"/img/users/user2.jpg"}),i.default.createElement(u.Box,null,i.default.createElement("span",null,"Iliash Hossain"),i.default.createElement(l.Text,{muted:!0,as:"p"},"online"))),i.default.createElement(u.Box,{my:3},i.default.createElement(d.Button,{name:"Zaakceptuj",onClick:()=>console.log("click")}),i.default.createElement(d.Button,{ml:3,name:"Odrzuć",variant:"danger",onClick:()=>console.log("click")}),i.default.createElement(u.Box,{mt:2},i.default.createElement(d.Button,{onClick:()=>a(!0),name:"Zaproponuj inne warunki",variant:"link"}))),i.default.createElement(u.Box,{my:3},i.default.createElement(l.Text,{muted:!0,as:"p",mb:3},"Termin"," ",i.default.createElement("strong",null,"17 - 19 lut, 2022")," ","pozostanie zablokowany do rezerwacji do czasu akceptacji lub odrzucenia rezerwacji."),i.default.createElement(l.Text,{muted:!0,as:"p"},"Odpowiedz w ciągu"," ",i.default.createElement(l.Text,{color:o.COLORS.red,fontWeight:s.FONT_WEIGHTS.bold},"07:19:23"),","," ","aby utrzymać"," ",i.default.createElement(m.Tooltip,{text:"wskaźnik odpowiedzi",label:"Na podstawie otrzymanych przez Ciebie rezerwacji, obliczamy procent tych, na które zareagowałeś.\n              Staraj się odpowiadać na każdą nową rezerwację, używając przycisku “Zaakceptuj”, “Odrzuć” lub\n              “Zaproponuj inne warunki”.\n               Nie pozostawiaj gości bez odpowiedzi. Pamiętaj, że sama odpowiedź w formie wiadomości tekstowej nie jest\n               brana pod uwagę do wyliczania tego wskaźnika.\n                Jeśli otrzymasz nową rezerwację, ale potrzebujesz dodatkowych informacji od gościa, jak najszybciej\n                prześlij do niego wiadomość.\n                Dzięki temu, po odpowiedzi gościa, szybciej zdecydujesz czy zaakceptować czy odrzucić rezerwację."})," ","na wysokim poziomie."))),i.default.createElement(h.NewProposalModal,{setNewProposalModalOpen:a,isNewProposalModalOpen:e}))}},551:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ConversationsDetailsHeader=void 0;var r=t(6976);Object.defineProperty(a,"ConversationsDetailsHeader",{enumerable:!0,get:function(){return n(r).default}})},5184:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ConversationsDetailsWrapper=void 0;const r=n(t(9163));a.ConversationsDetailsWrapper=r.default.div`

`},7270:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(208),i=t(551),o=t(5184);a.default=({conversationDetails:e})=>(console.log(e),r.default.createElement(o.ConversationsDetailsWrapper,null,r.default.createElement(i.ConversationsDetailsHeader,null),r.default.createElement(c.Accordion,null,r.default.createElement(c.AccordionItem,null,r.default.createElement(c.AccordionButton,{title:"Szczegóły pobytu"}),r.default.createElement(c.AccordionPanel,null,r.default.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))),r.default.createElement(c.AccordionItem,null,r.default.createElement(c.AccordionButton,{title:"Koszty pobytu"}),r.default.createElement(c.AccordionPanel,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),r.default.createElement(c.AccordionItem,null,r.default.createElement(c.AccordionButton,{title:"Możliwe dodatkowe opłaty"}),r.default.createElement(c.AccordionPanel,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),r.default.createElement(c.AccordionItem,null,r.default.createElement(c.AccordionButton,{title:"Dane kontaktowe"}),r.default.createElement(c.AccordionPanel,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))))},821:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ConversationsDetails=void 0;var r=t(7270);Object.defineProperty(a,"ConversationsDetails",{enumerable:!0,get:function(){return n(r).default}})},243:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ConversationsItemWrapper=void 0;const r=n(t(9163));a.ConversationsItemWrapper=r.default.li`

`},445:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(4962),i=t(9583),o=t(8755),s=t(8691),l=t(8299),u=t(4597),f=t(9531),d=t(1362),m=t(4754),h=t(243);a.default=({userName:e,userAvatar:a,conversationId:t,lastMessage:n,setCurrentConversation:p})=>{const v=e.split(" "),_=v.shift().charAt(0)+v.pop().charAt(0);return r.default.createElement(h.ConversationsItemWrapper,null,r.default.createElement(d.Button,{size:"xs",width:"100%",variant:"ghost",onClick:()=>p(t)},r.default.createElement(c.Box,{hoverEffect:!0,p:2,display:"flex",borderRadius:i.BORDER_RADIUS.default,alignItems:"center"},r.default.createElement(c.Box,{mr:3,position:"relative"},r.default.createElement(o.Avatar,{size:"sm",alt:_.toUpperCase(),uri:a}),r.default.createElement(s.UserStatusDot,null)),r.default.createElement(c.Box,{display:"flex",width:"calc(100% - 3.75rem)",flexDirection:"column",whiteSpace:"nowrap"},r.default.createElement(c.Box,{display:"flex",alignItems:"center",justifyContent:"space-between"},r.default.createElement(l.Text,{color:u.COLORS.black},e),r.default.createElement(l.Text,{muted:!0,fontSize:m.FONT_SIZES.sm},"5h ago")),r.default.createElement(c.Box,{display:"flex",alignItems:"center",justifyContent:"space-between"},r.default.createElement(l.Text,{mr:3,fontSize:m.FONT_SIZES.sm,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",color:u.COLORS.gray},n),r.default.createElement(f.NotificationAlertDot,{variant:"info"}))))))}},2377:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ConversationsItem=void 0;var r=t(445);Object.defineProperty(a,"ConversationsItem",{enumerable:!0,get:function(){return n(r).default}})},2258:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ConversationsListWrapper=void 0;const r=n(t(9163));a.ConversationsListWrapper=r.default.div`

`},869:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(2377),i=t(2258),o=t(8452);a.default=({setCurrentConversation:e,conversations:a})=>r.default.createElement(i.ConversationsListWrapper,null,r.default.createElement("ul",null,a.map((a=>r.default.createElement(c.ConversationsItem,{key:a.id,userAvatar:"",userName:a.guest.name,conversationId:Number(a.id)-1,setCurrentConversation:e,lastMessage:(0,o.getLastConversationMessage)(a.messages)})))))},9687:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.MessageContent=a.MessageContainer=void 0;const r=n(t(9163));a.MessageContainer=r.default.div`
    display: flex;
    flex-direction: ${({isGuest:e})=>e&&"row-reverse"} ;
    margin-bottom: ${({theme:e})=>e.spacing.sm};
`,a.MessageContent=r.default.div`
    max-width: 49%;
    font-size: ${({theme:e})=>e.fontSizes.sm};
    padding: ${({theme:e})=>e.spacing.sm};
    background: ${({theme:e,isGuest:a})=>a?e.colors.lightGray:e.colors.brandLight};
    border-radius: ${({theme:e})=>e.borderRadius.default};
`},3551:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(8755),i=t(4962),o=t(9687);a.default=({message:e,userName:a,userAvatar:t})=>r.default.createElement(o.MessageContainer,{isGuest:"guest"===a},r.default.createElement(i.Box,{display:"flex",flexDirection:"column",alignContent:"flex-end"},r.default.createElement(c.Avatar,{size:"xs",mr:2,alt:a,uri:t})),r.default.createElement(o.MessageContent,{isGuest:"guest"===a},e))},4393:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.MessageBox=void 0;var r=t(3551);Object.defineProperty(a,"MessageBox",{enumerable:!0,get:function(){return n(r).default}})},7431:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.MessageInputStyle=a.MessageInputContainer=void 0;const r=n(t(9163)),c=t(3643);a.MessageInputContainer=r.default.div`
    display: flex;
    padding: ${({theme:e})=>e.spacing.sm};
    justify-content: space-between
`,a.MessageInputStyle=(0,r.default)(c.Textarea)`
    flex: 1 0 0;
  padding: ${({theme:e})=>e.spacing.xs};
`},7364:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(1362),i=t(6024),o=t(9583),s=t(7431);a.default=({writeText:e,addMessage:a})=>r.default.createElement(s.MessageInputContainer,null,r.default.createElement(s.MessageInputStyle,{placeholder:"Napisz wiadomość",onChange:e}),r.default.createElement(c.Button,{mx:2,name:"Wyślij",borderRadius:o.BORDER_RADIUS.md,icon:i.faPaperPlane,variant:"primary",onClick:a}))},8519:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.MessageInput=void 0;var r=t(7364);Object.defineProperty(a,"MessageInput",{enumerable:!0,get:function(){return n(r).default}})},9969:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.MessageListStyle=void 0;const r=n(t(9163));a.MessageListStyle=r.default.div`
    flex-grow: 1;
    padding: ${({theme:e})=>e.spacing.md};
`},2169:function(e,a,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(a,e,t);return r(a,e),a};Object.defineProperty(a,"__esModule",{value:!0});const i=c(t(7294)),o=t(9969),s=t(4393);a.default=({messages:e})=>i.default.createElement(o.MessageListStyle,null,e.map((e=>i.default.createElement(i.Fragment,{key:e.id},i.default.createElement(s.MessageBox,{message:e.text,userName:e.sender,userAvatar:e.sender})))))},5203:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.MessageList=void 0;var r=t(2169);Object.defineProperty(a,"MessageList",{enumerable:!0,get:function(){return n(r).default}})},8452:(e,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.getLastConversationMessage=void 0,a.getLastConversationMessage=e=>e.slice(-1).pop().text},3364:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Chat=void 0;var r=t(3303);Object.defineProperty(a,"Chat",{enumerable:!0,get:function(){return n(r).default}})},2184:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.CheckboxLabel=a.CheckboxInput=a.CheckboxWrapper=void 0;const r=n(t(9163));a.CheckboxWrapper=r.default.div`
    display: flex;
    align-items: center;
    margin-right: ${({theme:e})=>e.spacing.sm};
`,a.CheckboxInput=r.default.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`,a.CheckboxLabel=r.default.label`
    cursor: pointer;
    font-size: ${({theme:e})=>e.fontSizes.sm};
    margin: 0.2rem 0.5rem;
`},4313:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(2184);a.default=e=>{var{label:a,onChange:t}=e,r=n(e,["label","onChange"]);return c.default.createElement(i.CheckboxWrapper,null,c.default.createElement(i.CheckboxInput,Object.assign({id:a,type:"checkbox",onChange:t},r)),c.default.createElement(i.CheckboxLabel,{htmlFor:a},a))}},1178:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Checkbox=void 0;var r=t(4313);Object.defineProperty(a,"Checkbox",{enumerable:!0,get:function(){return n(r).default}})},7122:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.DarkModeSwitcherWrapper=void 0;const r=n(t(9163));a.DarkModeSwitcherWrapper=r.default.div`

`},1068:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(6024),i=t(7625),o=t(1362),s=t(7122);a.default=({theme:e,toggleTheme:a})=>r.default.createElement(s.DarkModeSwitcherWrapper,null,r.default.createElement(o.Button,{variant:"ghost",onClick:()=>a()},r.default.createElement(i.FontAwesomeIcon,{size:"lg",icon:"light"===e?c.faMoon:c.faSun})))},358:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.DarkModeSwitcher=void 0;var r=t(1068);Object.defineProperty(a,"DarkModeSwitcher",{enumerable:!0,get:function(){return n(r).default}})},9762:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.DropdownContainer=a.DropdownWrapper=void 0;const r=n(t(9163)),c=t(8005);a.DropdownWrapper=r.default.div`
  ${c.layout};
  position: relative;
`,a.DropdownContainer=r.default.div`

`},7522:function(e,a,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(a,e,t);return r(a,e),a};Object.defineProperty(a,"__esModule",{value:!0});const i=c(t(7294)),o=t(1362),s=t(7625),l=t(2593),u=t(9762);a.default=({icon:e,placeholder:a="",customDropdownButton:t,children:n})=>{const r=(0,i.useRef)(null),[c,f]=(0,l.useDetectOutsideClick)(r,!1);return i.default.createElement(u.DropdownWrapper,null,i.default.createElement(o.Button,{variant:"ghost",onClick:()=>f(!c)},t||i.default.createElement(i.default.Fragment,null,i.default.createElement(s.FontAwesomeIcon,{size:"lg",icon:e}),a)),c&&i.default.createElement(u.DropdownContainer,{ref:r},n))}},9461:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.DropdownItemWrapper=void 0;const r=n(t(9163)),c=t(8005);a.DropdownItemWrapper=r.default.li`
  ${c.border};
  display: flex;
  align-items: center;
  font-size: ${({theme:e})=>e.fontSizes.md};
  color: ${({theme:e})=>e.colors.gray};
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.md}`};
  
  &:hover {
    background: ${({theme:e})=>e.colors.lightGray};
  }
  
  & svg {
    margin-right: ${({theme:e})=>e.fontSizes.xs};
  }
`},3909:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(9461);a.default=e=>{var{children:a}=e,t=n(e,["children"]);return c.default.createElement(i.DropdownItemWrapper,Object.assign({},t),a)}},652:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.DropdownItem=void 0;var r=t(3909);Object.defineProperty(a,"DropdownItem",{enumerable:!0,get:function(){return n(r).default}})},607:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.DropdownMenuWrapper=void 0;const r=n(t(9163)),c=t(8005);a.DropdownMenuWrapper=r.default.ul`
  ${c.layout};
  min-width: 10rem;
  position: absolute;
  right: 2px;
  left: auto;
  bottom: auto;
  padding: 0;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: 0px 0px 15px 1px rgb(69 65 78 / 20%);
  border-radius:  ${({theme:e})=>e.borderRadius.default};
`},5970:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(607);a.default=e=>{var{children:a}=e,t=n(e,["children"]);return c.default.createElement(i.DropdownMenuWrapper,Object.assign({},t),a)}},2504:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.DropdownMenu=void 0;var r=t(5970);Object.defineProperty(a,"DropdownMenu",{enumerable:!0,get:function(){return n(r).default}})},6149:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Dropdown=void 0;var r=t(7522);Object.defineProperty(a,"Dropdown",{enumerable:!0,get:function(){return n(r).default}})},2971:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.GridStyles=void 0;const r=n(t(9163)),c=t(8005),i=t(4962),o=(0,c.compose)(c.grid,c.layout);a.GridStyles=(0,r.default)(i.Box)`
  ${o};
  display: grid;
`},9863:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(2971);a.default=e=>{var{children:a}=e,t=n(e,["children"]);return c.default.createElement(i.GridStyles,Object.assign({},t),a)}},2346:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Grid=void 0;var r=t(9863);Object.defineProperty(a,"Grid",{enumerable:!0,get:function(){return n(r).default}})},5055:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(7228),o=t(8299),s=e=>{var{title:a,children:t,type:r,disableMobileStyles:s}=e,l=n(e,["title","children","type","disableMobileStyles"]);const u=i.HEADINGS_STYLES_DESKTOP[r];return c.default.createElement(o.Text,Object.assign({as:r},u,l),a||t)};a.default=s,s.defaultProps={disableMobileStyles:!1}},4567:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Heading=void 0;var r=t(5055);Object.defineProperty(a,"Heading",{enumerable:!0,get:function(){return n(r).default}})},5531:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.IconWrapper=void 0;const r=n(t(9163)),c=t(8005);a.IconWrapper=r.default.div`
  ${c.space};
`},9443:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(7625),o=t(5531);a.default=e=>{var{name:a,color:t}=e,r=n(e,["name","color"]);return c.default.createElement(o.IconWrapper,Object.assign({},r),c.default.createElement(i.FontAwesomeIcon,{icon:a,color:t}))}},4170:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Icon=void 0;var r=t(9443);Object.defineProperty(a,"Icon",{enumerable:!0,get:function(){return n(r).default}})},7567:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Img=void 0;const r=n(t(9163)),c=t(8005),i=(0,c.compose)(c.background,c.border,c.boxShadow,c.color,c.layout,c.position,c.space,(0,c.system)({textAlign:!0,transform:!0,transition:!0,overflow:!0,textDecoration:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0}));a.Img=r.default.img`
  ${i};
`},9470:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(7567);a.default=e=>{var{hoverEffect:a,objectFit:t}=e,r=n(e,["hoverEffect","objectFit"]);return c.default.createElement(i.Img,Object.assign({objectFit:t,hoverEffect:a},r))}},1274:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Image=void 0;var r=t(9470);Object.defineProperty(a,"Image",{enumerable:!0,get:function(){return n(r).default}})},5556:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(6024),i=t(6149),o=t(2504),s=t(2377),l=t(4567),u=t(8299),f=t(4962),d=t(4754),m=t(1362),h=t(3898),p=t(4597);a.default=({messages:e})=>r.default.createElement(i.Dropdown,{icon:c.faEnvelope},r.default.createElement(o.DropdownMenu,{width:"18rem"},r.default.createElement(f.Box,{px:3,py:2,borderBottom:`1px solid ${p.COLORS.lightGray}`},r.default.createElement(f.Box,{display:"flex",alignItems:"center",justifyContent:"space-between"},r.default.createElement(l.Heading,{type:"h5"},"Messages"),r.default.createElement(m.Button,{variant:"link",name:"Mark all as read",onClick:()=>console.log("click")})),r.default.createElement(u.Text,{muted:!0,fontSize:d.FONT_SIZES.xs},"You have"," ",e.length," ","unread message(s).")),r.default.createElement("ul",null,e.slice(0,5).map((e=>r.default.createElement(s.ConversationsItem,{key:e.id,userName:e.sender,userAvatar:e.sender,lastMessage:e.text,conversationId:e.id})))),r.default.createElement(f.Box,{py:2,textAlign:"center",borderTop:`1px solid ${p.COLORS.lightGray}`},r.default.createElement(h.Link,{href:"/chat",fontSize:d.FONT_SIZES.sm,variant:"success",name:"View all messages",textDecoration:"underline"}))))},9867:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.InboxDropdown=void 0;var r=t(5556);Object.defineProperty(a,"InboxDropdown",{enumerable:!0,get:function(){return n(r).default}})},8133:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.InputStyle=a.InputWrapper=a.Label=void 0;const r=n(t(9163)),c=t(8005),i=(0,c.compose)(c.space,c.layout);a.Label=r.default.label`
      color: #999;
      font-weight: normal;
      opacity: 0.75;
      order: 1;
      /*outline: 0;*/
      padding-left: ${({theme:e})=>e.spacing.sm};
      pointer-events: none;
      text-shadow: none;
      text-transform: capitalize;
      transform-origin: left top;
      transform: scale(1) translate3d(0, 2rem, 0);
      transition: 200ms ease all;
    `,a.InputWrapper=r.default.div`
  ${i};
  display: flex;
  flex-direction: column;
  position: relative;
  &:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing.sm};
  }
`,a.InputStyle=r.default.input`
  border-radius: 0;
  display: flex;
  text-shadow: none;
  padding: ${({theme:e})=>e.spacing.sm};
  border-radius: ${({theme:e})=>e.borderRadius.default};
  border: ${({theme:e})=>`1px solid ${e.colors.gray}`};
  order: 2;
  &:focus {
    outline: 0;
  }

  &:not(:focus) {
    color: transparent;
  }

  &:focus + ${a.Label} {
    color:  ${({theme:e})=>e.colors.gray};
    opacity: 1;
    transform: scale(0.8) translate3d(0, 1rem, 0);
    padding-left: 0;
  }
`},7060:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(8133);a.default=e=>{var{label:a}=e,t=n(e,["label"]);return c.default.createElement(i.InputWrapper,null,c.default.createElement(i.InputStyle,Object.assign({},t)),c.default.createElement(i.Label,null,a))}},9482:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Input=void 0;var r=t(7060);Object.defineProperty(a,"Input",{enumerable:!0,get:function(){return n(r).default}})},3432:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.LinkStyle=void 0;const r=n(t(9163)),c=t(8005),i=t(7276);a.LinkStyle=r.default.a`
  ${c.space};
  ${c.typography};
  cursor: pointer;
  line-height: 1.25rem;
  display: ${({type:e})=>"button"===e&&"inline-block"};
  border-radius:  ${({type:e})=>"button"===e&&(0,i.mapToTheme)("borderRadius","variant")};
  color:  ${({type:e})=>"button"===e?(0,i.mapToTheme)("button.text","variant"):(0,i.mapToTheme)("colors","variant")};
  background:  ${({type:e})=>"button"===e&&(0,i.mapToTheme)("button.background","variant")};
  padding:  ${({type:e})=>"button"===e&&(0,i.mapToTheme)("button.size","variant")};
  text-decoration: none;
  &:hover {
    background:  ${({type:e})=>"button"===e&&(0,i.mapToTheme)("button.backgroundHover","variant")};
    text-decoration: ${({textDecoration:e})=>"underline"===e?"underline":"none"};
  }
`},2608:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(3432);a.default=e=>{var{children:a,name:t,type:r,textDecoration:o,variant:s}=e,l=n(e,["children","name","type","textDecoration","variant"]);return c.default.createElement(i.LinkStyle,Object.assign({type:r,variant:s,textDecoration:o},l),t,a)}},3898:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Link=void 0;var r=t(2608);Object.defineProperty(a,"Link",{enumerable:!0,get:function(){return n(r).default}})},375:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.LoginFormWrapper=void 0;const r=n(t(9163));a.LoginFormWrapper=r.default.div`
  display: grid;
  place-items: center;
`},696:function(e,a,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(a,e,t);return r(a,e),a},i=this&&this.__awaiter||function(e,a,t,n){return new(t||(t=Promise))((function(r,c){function i(e){try{s(n.next(e))}catch(e){c(e)}}function o(e){try{s(n.throw(e))}catch(e){c(e)}}function s(e){var a;e.done?r(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(i,o)}s((n=n.apply(e,a||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const s=o(t(9669)),l=c(t(7294)),u=t(4597),f=t(2510),d=t(9583),m=t(4962),h=t(1979),p=t(9482),v=t(1362),_=t(1178),M=t(375);a.default=({isAuthenticated:e})=>{const[a,t]=(0,l.useState)({username:"",password:""}),[n,r]=(0,l.useState)(!1),[c,o]=(0,l.useState)(!1),[y,g]=(0,l.useState)(!1),[b,L]=(0,l.useState)(!0),z=[{id:1,type:"text",name:"name",label:"name",value:a.username},{id:2,type:"password",name:"password",label:"password",value:a.password}],k=e=>i(void 0,void 0,void 0,(function*(){e.preventDefault(),yield s.default.post("http://localhost:8080/api/admin/register",{first_name:a.username,password:a.password}),r(!0),console.log(n),b&&(L(!1),t(a)),o(!0)})),w=b?"All good":"Wrong username or password",H=b?"success":"danger";return l.default.createElement(M.LoginFormWrapper,null,l.default.createElement(h.Alert,{isShow:c,text:w,variant:H}),l.default.createElement(m.Box,{width:"40%",p:f.SPACING.md,background:u.COLORS.white,borderRadius:d.BORDER_RADIUS.default},e&&"ok",l.default.createElement(m.Box,{my:f.SPACING.md},l.default.createElement("form",{onSubmit:e=>k(e)}),z.map((e=>l.default.createElement(p.Input,{key:e.id,label:e.name,onChange:e=>(e=>{t(Object.assign(Object.assign({},a),{[e.target.name]:e.target.value}))})(e)}))),l.default.createElement(_.Checkbox,{value:"remember",label:"I agree with terms",checked:y,onChange:()=>g(!y)})),l.default.createElement(v.Button,{name:"Sign in",variant:"primary",onClick:e=>k(e)})))}},5919:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.LoginForm=void 0;var r=t(696);Object.defineProperty(a,"LoginForm",{enumerable:!0,get:function(){return n(r).default}})},1677:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ModalFooter=a.ModalBody=a.ModalHeader=a.ModalContent=a.ModalOverlay=a.ModalWrapper=void 0;const r=n(t(9163));a.ModalWrapper=r.default.div`
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%;
  overflow: auto;
  position: fixed;
  padding-top: 3.5rem; 
  background-color: rgba(0,0,0,0.4);
  animation-duration: 0.4s;
  display: ${({isOpen:e})=>e?"block":"none"};
  animation-name: ${({theme:e})=>e.animations.fadeIn};
  z-index: ${({order:e})=>1===e?"1050":"1040"};
`,a.ModalOverlay=r.default.div`
  inset: 0px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
`,a.ModalContent=r.default.div`
  margin: auto;
  z-index: 1400;
  max-width: 34rem;
  border-radius: ${({theme:e})=>e.borderRadius.default};
  background: ${({theme:e})=>e.colors.white};
`,a.ModalHeader=r.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spacing.md} ${e.spacing.md}`};
`,a.ModalBody=r.default.div`
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
`,a.ModalFooter=r.default.div`
  padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
`},6097:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(4567),i=t(1436),o=t(1362),s=t(1677);a.default=({order:e,title:a,isOpen:t,onClose:n,children:l})=>r.default.createElement(s.ModalWrapper,{order:e,isOpen:t},r.default.createElement(s.ModalContent,null,r.default.createElement(s.ModalHeader,null,r.default.createElement(c.Heading,{type:"h5",text:a,textAlign:"left"}),r.default.createElement(o.Button,{variant:"ghost",icon:i.faTimes,onClick:()=>n(!1)})),r.default.createElement(s.ModalBody,null,l),r.default.createElement(s.ModalFooter,null,"footer")))},8325:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Modal=void 0;var r=t(6097);Object.defineProperty(a,"Modal",{enumerable:!0,get:function(){return n(r).default}})},7917:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(4962),i=t(4597);a.default=({isShow:e=!0,isAbsolute:a,variant:t})=>{const n=(()=>{switch(t){case"danger":return i.COLORS.red;case"warning":return i.COLORS.orange;case"info":return i.COLORS.blue;default:return i.COLORS.brand}})();return r.default.createElement("div",null,e&&r.default.createElement(c.Box,{background:n,top:"-3px",border:`2px solid ${i.COLORS.white}`,right:"-2px",width:".625rem",height:".625rem",borderRadius:"50%",position:a?"absolute":null}))}},9531:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.NotificationAlertDot=void 0;var r=t(7917);Object.defineProperty(a,"NotificationAlertDot",{enumerable:!0,get:function(){return n(r).default}})},68:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(6149),i=t(6024),o=t(2504),s=t(652);a.default=()=>r.default.createElement(c.Dropdown,{icon:i.faBell},r.default.createElement(o.DropdownMenu,null,r.default.createElement(s.DropdownItem,null,"Notify")))},6922:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.NotificationsDropdown=void 0;var r=t(68);Object.defineProperty(a,"NotificationsDropdown",{enumerable:!0,get:function(){return n(r).default}})},1082:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.RegisterFormWrapper=void 0;const r=n(t(9163));a.RegisterFormWrapper=r.default.div`

`},1492:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(1082);a.default=({children:e})=>r.default.createElement(c.RegisterFormWrapper,null,e)},2807:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.RegisterForm=void 0;var r=t(1492);Object.defineProperty(a,"RegisterForm",{enumerable:!0,get:function(){return n(r).default}})},74:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(8325);a.default=({setNewProposalModalOpen:e,isNewProposalModalOpen:a})=>r.default.createElement(c.Modal,{title:"Propozycja nowych warunków",isOpen:a,onClose:e},"Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.")},7837:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.NewProposalModal=void 0;var r=t(74);Object.defineProperty(a,"NewProposalModal",{enumerable:!0,get:function(){return n(r).default}})},5895:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(9260),i=t(2510),o=t(9583),s=t(4962),l=t(3898),u=t(1274),f=t(8299),d=t(7625),m=t(1436),h=t(4597),p=t(4754);a.default=({id:e,host:a,guest:t,dateFrom:n,dateTo:v,status:_,statusName:M,firstMessageTime:y})=>r.default.createElement(l.Link,{key:e,href:`/reservations/${e}`},r.default.createElement(s.Box,{hoverEffect:!0,p:i.SPACING.md,my:i.SPACING.md,background:"white",display:"flex",alignItems:"center",borderRadius:o.BORDER_RADIUS.default},r.default.createElement(s.Box,{flex:1,display:"flex",alignItems:"center"},r.default.createElement(u.Image,{width:"3rem",height:"3rem",alt:a.name,borderRadius:o.BORDER_RADIUS.default,src:"/img/properties/apart.jpg"}),r.default.createElement(s.Box,{ml:3,display:"flex",flexDirection:"column"},r.default.createElement(f.Text,{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",text:a.name}),r.default.createElement(f.Text,{muted:!0,text:`#${e}`,fontSize:p.FONT_SIZES.sm}))),r.default.createElement(s.Box,{flex:1},(0,c.createdAt)(y)),r.default.createElement(s.Box,{flex:1},t.name),r.default.createElement(s.Box,{flex:1},(0,c.formatStayTerm)(n,v)),r.default.createElement(s.Box,{flex:1},r.default.createElement(f.Text,{ml:3,overflow:"hidden",text:M,whiteSpace:"nowrap",textOverflow:"ellipsis",color:h.COLORS[(0,c.reservationVariantBadge)(_)]})),r.default.createElement(s.Box,{display:"flex",justifyContent:"flex-end"},r.default.createElement(d.FontAwesomeIcon,{size:"lg",color:h.COLORS.gray,icon:m.faChevronRight}))))},9879:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ReservationItem=void 0;var r=t(5895);Object.defineProperty(a,"ReservationItem",{enumerable:!0,get:function(){return n(r).default}})},3639:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(2162);a.default=({reservations:e})=>r.default.createElement(c.ReservationsList,{reservations:e})},2157:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(9879);a.default=({reservations:e})=>r.default.createElement(r.default.Fragment,null,e.map((({id:e,host:a,guest:t,context:n,statusName:i,firstMessageTime:o})=>r.default.createElement(c.ReservationItem,{id:e,key:e,host:a,dateFrom:n.dateFrom,dateTo:n.dateTo,guest:t,status:n.status,statusName:i,firstMessageTime:o}))))},2162:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ReservationsList=void 0;var r=t(2157);Object.defineProperty(a,"ReservationsList",{enumerable:!0,get:function(){return n(r).default}})},9260:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.reservationVariantBadge=a.createdAt=a.formatStayTerm=void 0;const r=n(t(381));a.formatStayTerm=(e,a)=>{const t=(0,r.default)(e),n=(0,r.default)(a),c=r.default.monthsShort();return`${t.date()} - ${n.date()}, ${c[n.month()]} ${t.year()}`},a.createdAt=e=>(0,r.default)(e,"YYYY-MM-DD").format("YYYY-MM-DD"),a.reservationVariantBadge=e=>{switch(e){case"new_inquiry":case"wait_for_payment":case"new":return"warning";case"rejected_by_user":case"rejected_by_user_after_paid":case"reject_by_host":case"expired":case"rejected":return"danger";default:return"success"}}},7682:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Reservations=void 0;var r=t(3639);Object.defineProperty(a,"Reservations",{enumerable:!0,get:function(){return n(r).default}})},5920:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ResetPasswordFormWrapper=void 0;const r=n(t(9163));a.ResetPasswordFormWrapper=r.default.div`

`},7779:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(5920);a.default=({children:e})=>r.default.createElement(c.ResetPasswordFormWrapper,null,e)},157:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.ResetPasswordForm=void 0;var r=t(7779);Object.defineProperty(a,"ResetPasswordForm",{enumerable:!0,get:function(){return n(r).default}})},6063:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.SwitchWrapper=a.SwitchInput=a.SwitchSlider=void 0;const r=n(t(9163)),c=t(8005);a.SwitchSlider=r.default.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0; 
  bottom: 0;
  background-color: ${({theme:e,toggle:a})=>a?e.colors.green:e.colors.lightGray};
  border-radius: 15px;
  transition: 0.4s;
  &:before {
    content: '';
    position: absolute;
    left: 2px;
    bottom: 2px;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: ${({toggle:e,theme:a})=>e?a.colors.white:a.colors.gray};
    transition: 0.4s;
  }
`,a.SwitchInput=r.default.input`
  &:checked + ${a.SwitchSlider} {
    background-color: ${({theme:e})=>e.colors.green};
  }
  &:checked + ${a.SwitchSlider}:before {
    transform: translateX(23.4px);
  } 
`,a.SwitchWrapper=r.default.label`
 ${c.space};
 position: relative;
 display: inline-block;
 width: 48px;
 height: 24px;

 & ${a.SwitchInput} {
  opacity: 0;
  width: 0;
  height: 0;
 }
`},3140:function(e,a,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(a,e,t);return r(a,e),a},i=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t};Object.defineProperty(a,"__esModule",{value:!0});const o=c(t(7294)),s=t(6063);a.default=e=>{var a=i(e,[]);const[t,n]=(0,o.useState)(!1);return o.default.createElement(s.SwitchWrapper,Object.assign({},a),o.default.createElement(s.SwitchInput,{type:"checkbox"}),o.default.createElement(s.SwitchSlider,{toggle:t,onClick:()=>n(!t)}))}},6469:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Switch=void 0;var r=t(3140);Object.defineProperty(a,"Switch",{enumerable:!0,get:function(){return n(r).default}})},6597:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.TextStyles=void 0;const r=n(t(9163)),c=t(8005),i=(0,c.compose)(c.space,(0,c.system)({overflow:!0,textDecoration:!0,textDecorationStyle:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0}),c.color,c.textShadow,c.typography);a.TextStyles=r.default.span`
  ${i};
  color: ${({theme:e,muted:a})=>a&&e.colors.gray};
`},5901:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(6597);a.default=e=>{var{text:a,muted:t,children:r}=e,o=n(e,["text","muted","children"]);return c.default.createElement(i.TextStyles,Object.assign({muted:t},o),a||r)}},8299:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Text=void 0;var r=t(5901);Object.defineProperty(a,"Text",{enumerable:!0,get:function(){return n(r).default}})},2793:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.TextareaStyle=void 0;const r=n(t(9163)),c=t(8005),i=(0,c.compose)(c.space,c.layout,c.border);a.TextareaStyle=r.default.textarea`
  ${i};
  display: flex;
  position: relative;
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius.default};
  border: ${({theme:e})=>`1 px solid ${e.colors.lightGray}`};
`},7847:function(e,a,t){"use strict";var n=this&&this.__rest||function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const c=r(t(7294)),i=t(2793);a.default=e=>{var{icon:a,label:t,onChange:r}=e,o=n(e,["icon","label","onChange"]);return c.default.createElement(i.TextareaStyle,Object.assign({},o,{onChange:r}))}},3643:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Textarea=void 0;var r=t(7847);Object.defineProperty(a,"Textarea",{enumerable:!0,get:function(){return n(r).default}})},9205:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.TooltipText=a.TooltipContent=a.TooltipWrapper=void 0;const r=n(t(9163)),c=t(8005);a.TooltipWrapper=r.default.div`
  ${c.space};
  position: relative;
  display: inline-block;
`,a.TooltipContent=r.default.span`
  position: fixed;
  transform: translate(-50%, 10%);
  width: 252px;
  z-index: 999;
  white-space: normal;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;
  padding: ${({theme:e})=>e.spacing.sm};
  color:  ${({theme:e})=>e.colors.white};
  background:  ${({theme:e})=>e.colors.black};
  border-radius:  ${({theme:e})=>e.borderRadius.default};
  visibility: hidden;
  &:after {
    content: " ";
    position: absolute;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`,a.TooltipText=r.default.span`
  text-decoration: ${({isUnderline:e})=>e?"underline":"none"};
  text-decoration-style: ${({isUnderline:e})=>e?"dashed":"none"};
  &:hover {
    cursor: ${({isUnderline:e})=>e?"help":"none"};
  }
  &:hover + ${a.TooltipContent} {
    opacity: 1;
    visibility: visible;
  }
`},3029:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(9205);a.default=({label:e,text:a,children:t})=>r.default.createElement(c.TooltipWrapper,null,r.default.createElement(c.TooltipText,{isUnderline:a},a),r.default.createElement(c.TooltipContent,null,r.default.createElement("span",null,e)||t))},7932:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Tooltip=void 0;var r=t(3029);Object.defineProperty(a,"Tooltip",{enumerable:!0,get:function(){return n(r).default}})},2388:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(4962);a.default=()=>r.default.createElement(c.Box,{background:"#1ee0ac",bottom:"0",border:"2px solid #fff",right:"0",width:".75rem",height:".75rem",borderRadius:"50%",position:"absolute"})},8691:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.UserStatusDot=void 0;var r=t(2388);Object.defineProperty(a,"UserStatusDot",{enumerable:!0,get:function(){return n(r).default}})},2593:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useDetectOutsideClick=void 0;const n=t(7294);a.useDetectOutsideClick=(e,a)=>{const[t,r]=(0,n.useState)(a);return(0,n.useEffect)((()=>{const a=a=>{e.current&&!e.current.contains(a.target)&&r(!t)};return t&&window.addEventListener("click",a),()=>{window.removeEventListener("click",a)}}),[t,e]),[t,r]}},5454:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.useWindowSize=void 0;const n=t(7294),r=()=>({height:window.innerHeight,width:window.innerWidth});a.useWindowSize=()=>{const[e,a]=(0,n.useState)(r()),t=Number(e.width)<=992;function c(){a(r())}return(0,n.useEffect)((()=>(window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)})),[]),t}},7927:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=n(t(3935)),i=t(1611),o=n(t(1594));c.default.render(r.default.createElement(i.BrowserRouter,null,r.default.createElement(o.default,null)),document.getElementById("root"))},1770:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.AsideOverlay=a.AsideCloseButton=a.AsideContainer=a.AsideWrapper=void 0;const r=n(t(9163)),c=n(t(6498)),i=t(1362);a.AsideWrapper=r.default.aside`
  position: fixed;
  z-index: 1030;
  width: 15rem;
  grid-area: asideLeft; 
  transition: transform .3s;
  transform: ${({isVisible:e,isMobile:a})=>e||!a?"translateX(0rem)":"translateX(-16rem)"};
`,a.AsideContainer=r.default.div`
  z-index: 999;
  height: 100vh;
  background: ${({theme:e})=>e.colors.white};
  overflow-y: auto;
  transition: all .2s ease-in-out;
  color: ${({theme:e})=>e.textColor};
  @media ${c.default.device.lg} {
    left: 0;
    display: block;
    transform: translateX(0);
  }
`,a.AsideCloseButton=(0,r.default)(i.Button)`
  top: 0;
  left: 100%;
  width: 3rem;
  height: 3rem;
  margin: 1.6rem;
  position: absolute;
  border-radius: 50%;
  color: ${({theme:e})=>e.colors.gray};
  background: ${({theme:e})=>e.colors.white};
  box-shadow: ${({theme:e})=>e.boxShadows.default};
  box-shadow:   ${({theme:e})=>e.boxShadows.default};
  visibility: ${({isVisible:e})=>e?"visible":"hidden"};
`,a.AsideOverlay=r.default.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 170;
  position: fixed;
  background: rgba(28,29,31,.8);
  opacity: ${({isVisible:e})=>e?1:0};
  display: ${({isVisible:e})=>e?"block":"none"};
`},6291:function(e,a,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(a,e,t);return r(a,e),a};Object.defineProperty(a,"__esModule",{value:!0});const i=c(t(7294)),o=t(1611),s=t(9921),l=t(8367),u=t(7625),f=t(1436),d=t(3898),m=t(1274),h=t(6119),p=t(4962),v=t(5454),_=t(1770);a.default=({isSidebarOpen:e,setSidebarOpen:a})=>{const t=(0,v.useWindowSize)(),{pathname:n}=(0,o.useLocation)(),r=e=>Object.values(s.routes).filter((a=>e.includes(a.name)));return i.default.createElement(i.default.Fragment,null,i.default.createElement(_.AsideOverlay,{isVisible:e,onClick:()=>a(!1)}),i.default.createElement(_.AsideWrapper,{isMobile:t,isVisible:e},i.default.createElement(_.AsideCloseButton,{variant:"ghost",isVisible:e,onClick:()=>a(!1)},i.default.createElement(u.FontAwesomeIcon,{size:"lg",icon:f.faTimes})),i.default.createElement(_.AsideContainer,{isVisible:e},i.default.createElement(p.Box,{display:"flex",alignItems:"center",justifyContent:"center"},i.default.createElement(d.Link,{href:"/"},i.default.createElement(m.Image,{m:3,height:"40px",width:"134px",alt:"noclegowo",src:"/img/logo.svg"}))),i.default.createElement(h.Nav,null,Object.values(s.routes).filter((e=>"sidebar"===e.type)).map((e=>i.default.createElement(i.Fragment,{key:e.name},i.default.createElement(l.NavItem,{key:e.name},i.default.createElement(l.NavLink,{href:e.path,variant:"dark",textDecoration:"none",currentPage:e.path===n},i.default.createElement("div",null,i.default.createElement(l.NavItemIcon,{mx:3,size:"lg",icon:e.icon}),i.default.createElement("span",null,e.name)),r(e.children).length?i.default.createElement(l.NavItemIcon,{mr:2,size:"xs",icon:f.faChevronDown}):"")),r(e.children)&&"")))))))}},4092:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.AsideLeft=void 0;var r=t(6291);Object.defineProperty(a,"AsideLeft",{enumerable:!0,get:function(){return n(r).default}})},1286:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.FooterIcon=a.FooterWrapper=void 0;const r=n(t(9163));a.FooterWrapper=r.default.footer`
  margin: 1rem;
  display: flex;
  align-items: center;
  grid-area: footer;
`,a.FooterIcon=r.default.footer`
  cursor: pointer;
  margin-left: 1rem;
`},4859:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(1286);a.default=()=>r.default.createElement(c.FooterWrapper,null,"Copyright ©"," ",(new Date).getFullYear())},5342:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Footer=void 0;var r=t(4859);Object.defineProperty(a,"Footer",{enumerable:!0,get:function(){return n(r).default}})},2084:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.HeaderContent=a.HeaderWrapper=void 0;const r=n(t(9163));a.HeaderWrapper=r.default.header`
  width: 100%;
  z-index: 99;
  height: 76px;
  grid-area: header;
  transition: all 0.5s ease-in;
`,a.HeaderContent=r.default.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({theme:e})=>`0 ${e.spacing.lg}`}
`},6537:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(6024),i=t(1436),o=t(4962),s=t(6922),l=t(9867),u=t(8586),f=t(1362),d=t(6119),m=t(358),h=t(8453),p=t(5454),v=t(7625),_=t(426),M=t(2084);a.default=({theme:e,toggleTheme:a,setSidebarOpen:t})=>{const n=(0,p.useWindowSize)(),y=[{name:"messages",icon:c.faEnvelope,component:r.default.createElement(l.InboxDropdown,{messages:(()=>{const e=[];return _.reservations.conversations.forEach((a=>{a.messages.map((a=>e.push(a)))})),e})()})},{name:"notifications",icon:c.faBell,component:r.default.createElement(s.NotificationsDropdown,null)},{name:"darkMode",icon:"light"===e?c.faMoon:c.faSun,component:r.default.createElement(m.DarkModeSwitcher,{theme:e,toggleTheme:a})},{name:"profile",icon:i.faAngleDown,component:r.default.createElement(u.AccountMenu,null)}];return r.default.createElement(M.HeaderWrapper,null,r.default.createElement(M.HeaderContent,null,n&&r.default.createElement(f.Button,{variant:"ghost",onClick:()=>t(!0)},r.default.createElement(v.FontAwesomeIcon,{size:"lg",icon:i.faBars})),r.default.createElement(o.Box,{width:"100%",display:"flex",alignItems:"center",justifyContent:"flex-end"},r.default.createElement(d.Nav,{isHorizontal:!0},y.map((e=>r.default.createElement(h.NavItem,{isHorizontal:!0,key:e.name,icon:e.icon,component:null==e?void 0:e.component})))))))}},9995:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Header=void 0;var r=t(6537);Object.defineProperty(a,"Header",{enumerable:!0,get:function(){return n(r).default}})},4159:function(e,a,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(a,e,t);return r(a,e),a};Object.defineProperty(a,"__esModule",{value:!0});const i=c(t(7294)),o=t(4092),s=t(3970),l=t(9995),u=t(5342),f=t(2548);a.default=({theme:e,toggleTheme:a,children:t})=>{const[n,r]=(0,i.useState)(!1);return i.default.createElement(f.Wrapper,{view:"withLeftAside"},i.default.createElement(l.Header,{theme:e,links:[],toggleTheme:a,setSidebarOpen:r}),i.default.createElement(o.AsideLeft,{isSidebarOpen:n,setSidebarOpen:r}),i.default.createElement(s.Main,null,t),i.default.createElement(u.Footer,null))}},1690:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.MainContainer=a.MainWrapper=void 0;const r=n(t(9163));a.MainWrapper=r.default.main`
  display: grid;
  grid-area: main;
`,a.MainContainer=r.default.div`
  height: 100%;
  padding: ${({theme:e})=>`0 ${e.spacing.lg} 0`};
`},9113:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(1690);a.default=({children:e})=>r.default.createElement(c.MainWrapper,null,r.default.createElement(c.MainContainer,null,e))},3970:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Main=void 0;var r=t(9113);Object.defineProperty(a,"Main",{enumerable:!0,get:function(){return n(r).default}})},8367:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.NavItemIcon=a.NavLink=a.NavItem=a.NavItems=a.NavWrapper=void 0;const r=n(t(9163)),c=t(7625),i=t(3898),o=t(8005);a.NavWrapper=r.default.div`
`,a.NavItems=r.default.ul`
  padding: ${({theme:e})=>`0 ${e.spacing.md}`};
  display: ${({isHorizontal:e})=>e&&"flex"};
  align-items: ${({isHorizontal:e})=>e&&"center"};
`,a.NavItem=r.default.li`
  margin-bottom: ${({theme:e})=>e.spacing.xs};
`,a.NavLink=(0,r.default)(i.Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  font-weight: ${({theme:e,currentPage:a})=>a&&e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e,currentPage:a})=>a?e.colors.brandDark:"inherit"};
  background: ${({theme:e,currentPage:a})=>a&&e.colors.brandLight};
  padding: ${({theme:e})=>`${e.spacing.sm} 0`};
  &:hover {
    opacity: 1;
    cursor: pointer;
    color: ${({theme:e})=>e.colors.brandDark};
    background: ${({theme:e})=>e.colors.brandLight};
    & svg {
      color: ${({theme:e})=>e.colors.brandDark};
    }
  }
  & svg {
    color: ${({theme:e,currentPage:a})=>a&&e.colors.brandDark};
  }
`,a.NavItemIcon=(0,r.default)(c.FontAwesomeIcon)`
  ${o.space};
`},4374:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(8367);a.default=({children:e,isHorizontal:a})=>r.default.createElement(c.NavWrapper,null,r.default.createElement(c.NavItems,{isHorizontal:a},e))},1520:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.NavItemWrapper=void 0;const r=n(t(9163));a.NavItemWrapper=r.default.li`
  margin-bottom: ${({theme:e,isHorizontal:a})=>!a&&e.spacing.xs};
  border-radius: ${({theme:e})=>e.borderRadius.md};
`},6987:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(8367),i=t(1520);a.default=({open:e,name:a,component:t,isHorizontal:n,setOpen:o,children:s})=>r.default.createElement(i.NavItemWrapper,{isHorizontal:n},n?r.default.createElement("div",null,t):r.default.createElement(c.NavLink,{href:"/",name:a,onClick:()=>o(!e)}),e&&s)},8453:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.NavItem=void 0;var r=t(6987);Object.defineProperty(a,"NavItem",{enumerable:!0,get:function(){return n(r).default}})},6119:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Nav=void 0;var r=t(4374);Object.defineProperty(a,"Nav",{enumerable:!0,get:function(){return n(r).default}})},6868:function(e,a,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(a,e,t);return r(a,e),a},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.WrapperStyles=void 0;const o=c(t(9163)),s=i(t(6498));a.WrapperStyles=o.default.div`
  display: grid;
  min-height: 100vh;
  overflow: hidden;
  grid-template-rows: 80px 1fr 50px;
  grid-template-areas:
    "header" 
    "main" 
    "footer";
  @media ${s.default.device.lg} {
    ${({view:e})=>{switch(e){case"fullWidth":default:return o.css`
      grid-template-areas:
      "header header header" 
      "main main main" 
      "footer footer footer";
    `;case"withAsides":return o.css`
      grid-template-columns: 5rem 1fr 15rem;
      grid-template-areas:
      "asideLeft header header" 
      "asideLeft main asideRight" 
      "asideLeft footer asideRight";
    `;case"withLeftAside":return o.css`
      grid-template-columns: 15rem 1fr;
        grid-template-areas:
      "asideLeft header header" 
      "asideLeft main main" 
      "asideLeft footer footer";
      `;case"withRightAside":return o.css`
        grid-template-areas:
      "header header header" 
      "main main asideRight" 
      "footer footer asideRight";
      `}}};
  }
`},8225:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(6868);a.default=({view:e,children:a})=>r.default.createElement(c.WrapperStyles,{view:e},a)},2548:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Wrapper=void 0;var r=t(8225);Object.defineProperty(a,"Wrapper",{enumerable:!0,get:function(){return n(r).default}})},9284:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.Layout=void 0;var r=t(4159);Object.defineProperty(a,"Layout",{enumerable:!0,get:function(){return n(r).default}})},3255:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(3364),i=t(426);a.default=()=>(console.log(i.reservations),r.default.createElement(c.Chat,{conversations:i.reservations.conversations}))},1744:function(e,a,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(a,e,t);return r(a,e),a};Object.defineProperty(a,"__esModule",{value:!0});const i=c(t(7294)),o=t(7682),s=t(426);a.default=()=>{const[e,a]=(0,i.useState)(null);return(0,i.useEffect)((()=>{e&&a(s.reservations)}),[s.reservations]),i.default.createElement(o.Reservations,{reservations:s.reservations.conversations})}},6381:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(4567);a.default=()=>r.default.createElement(c.Heading,{mb:3,muted:!0,type:"h4",text:"Calendar"})},2597:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(4567);a.default=()=>r.default.createElement(r.default.Fragment,null,r.default.createElement(c.Heading,{type:"h4",mb:3},"Chat page"))},6330:function(e,a,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),r=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&n(a,e,t);return r(a,e),a};Object.defineProperty(a,"__esModule",{value:!0});const i=c(t(7294)),o=t(4597),s=t(2510),l=t(9583),u=t(2346),f=t(4962),d=t(8299),m=t(3898),h=t(4567),p=t(5919),v=t(1274),_=t(6322);a.default=()=>{const[e,a]=(0,i.useState)(!0);return a?i.default.createElement("div",null,i.default.createElement(h.Heading,{mb:3,muted:!0,type:"h4",text:"Home page"}),i.default.createElement(u.Grid,{gridGap:[2,3],height:"100%",gridTemplateColumns:"repeat(12,minmax(0,1fr))"},i.default.createElement(f.Box,{p:s.SPACING.lg,gridColumn:"span 12",background:o.COLORS.white,boxShadow:_.BOX_SHADOWS.default,borderRadius:l.BORDER_RADIUS.default},i.default.createElement(f.Box,{display:"flex",alignItems:"center",justifyContent:"space-between"},i.default.createElement("div",null,i.default.createElement(h.Heading,{type:"h1",text:"Hey, Don't forget to update your calendar"}),i.default.createElement(d.Text,{as:"p",muted:!0,mt:s.SPACING.md,text:"Hurry up! Season 2022 is coming. "}),i.default.createElement(m.Link,{type:"button",mt:s.SPACING.lg,href:"/calendar",variant:"success",name:"Update calendar"})),i.default.createElement(f.Box,null,i.default.createElement(v.Image,{height:"auto",width:"360px",objectFit:"cover",src:"/img/hero.svg",alt:"updated calendar"})))),i.default.createElement(f.Box,{p:4,gridColumn:"span 6",background:o.COLORS.white,boxShadow:_.BOX_SHADOWS.default,borderRadius:l.BORDER_RADIUS.default},i.default.createElement(h.Heading,{type:"h2",text:"Box 2"})),i.default.createElement(f.Box,{p:4,gridColumn:"span 6",background:o.COLORS.white,boxShadow:_.BOX_SHADOWS.default,borderRadius:l.BORDER_RADIUS.default},i.default.createElement(h.Heading,{type:"h2",text:"Box 3"})))):i.default.createElement(p.LoginForm,{isAuthenticated:e})}},5886:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=t(1611),c=n(t(7294)),i=t(9921);a.default=()=>c.default.createElement(r.Routes,null,c.default.createElement(r.Route,{path:i.routes.Home.path,element:i.routes.Home.component}),c.default.createElement(r.Route,{path:i.routes.Profile.path,element:i.routes.Profile.component}),c.default.createElement(r.Route,{path:i.routes.Settings.path,element:i.routes.Settings.component}),c.default.createElement(r.Route,{path:i.routes.Chat.path,element:i.routes.Chat.component}),c.default.createElement(r.Route,{path:i.routes.Login.path,element:i.routes.Login.component}),c.default.createElement(r.Route,{path:i.routes.ReservationsPreview.path,element:i.routes.ReservationsPreview.component}),c.default.createElement(r.Route,{path:i.routes.ReservationsDetails.path,element:i.routes.ReservationsDetails.component}),c.default.createElement(r.Route,{path:i.routes.Calendar.path,element:i.routes.Calendar.component}),c.default.createElement(r.Route,{path:i.routes.Register.path,element:i.routes.Register.component}),c.default.createElement(r.Route,{path:i.routes.PasswordReset.path,element:i.routes.PasswordReset.component}))},4799:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294));a.default=()=>r.default.createElement(r.default.Fragment,null,"My profile")},3002:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(2807);a.default=()=>r.default.createElement(r.default.Fragment,null,r.default.createElement("h3",null,"User Register"),r.default.createElement(c.RegisterForm,null))},3115:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(157);a.default=()=>r.default.createElement(c.ResetPasswordForm,null)},4560:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(4567),i=t(2346),o=t(4962),s=t(4597),l=t(8299),u=t(5877),f=t(4754),d=t(6469),m=t(2510);a.default=()=>r.default.createElement(r.default.Fragment,null,r.default.createElement(c.Heading,{type:"h2",title:"Settings"}),r.default.createElement(i.Grid,{mt:3,gridGap:4,gridTemplateColumns:"1fr 3fr"},r.default.createElement(o.Box,{p:3,background:s.COLORS.white},"menu"),r.default.createElement(o.Box,{p:m.SPACING.lg,background:s.COLORS.white},r.default.createElement(c.Heading,{type:"h4",mb:3,title:"Alerts & Notifications"}),r.default.createElement(o.Box,{py:3,display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:`1px solid ${s.COLORS.lightGray}`},r.default.createElement(o.Box,{display:"flex",flexDirection:"column"},r.default.createElement(l.Text,{text:"Company News",fontWeight:u.FONT_WEIGHTS.bold}),r.default.createElement(l.Text,{muted:!0,fontSize:f.FONT_SIZES.sm,text:"Get Rocket news, announcements, and product updates"})),r.default.createElement(d.Switch,null))," ",r.default.createElement(o.Box,{py:3,display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:`1px solid ${s.COLORS.lightGray}`},r.default.createElement(o.Box,{display:"flex",flexDirection:"column"},r.default.createElement(l.Text,{text:"Account Activity",fontWeight:u.FONT_WEIGHTS.bold}),r.default.createElement(l.Text,{muted:!0,fontSize:f.FONT_SIZES.sm,text:"Get Rocket news, announcements, and product updates"})),r.default.createElement(d.Switch,null)))))},2931:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(5919),i=t(4567);a.default=()=>r.default.createElement(r.default.Fragment,null,r.default.createElement(i.Heading,{mb:3,muted:!0,type:"h4",text:"Login page"}),r.default.createElement(c.LoginForm,{isAuthenticated:!1}))},9921:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.routes=void 0;var r=t(4364);Object.defineProperty(a,"routes",{enumerable:!0,get:function(){return n(r).default}})},4364:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});const r=n(t(7294)),c=t(6024),i=t(1436),o=n(t(6330)),s=n(t(2597)),l=n(t(4799)),u=n(t(3002)),f=n(t(3115)),d=n(t(4560)),m=n(t(2931)),h=n(t(6381)),p=n(t(1744)),v=n(t(3255)),_={Home:{type:"sidebar",name:"Home",path:"/",icon:i.faDesktop,component:r.default.createElement(o.default,null),children:[]},Register:{type:"",name:"Register",path:"/register",icon:i.faDesktop,component:r.default.createElement(u.default,null),children:[]},Login:{type:"",name:"Login",path:"/signin",icon:i.faDesktop,component:r.default.createElement(m.default,null),children:[]},ReservationsPreview:{type:"sidebar",name:"Reservations",path:"/reservations",icon:c.faEnvelope,component:r.default.createElement(p.default,null),children:[]},ReservationsDetails:{type:"",icon:c.faEnvelope,name:"InboxSingle",path:"/reservations/:id",component:r.default.createElement(v.default,null),children:[]},Chat:{type:"sidebar",name:"Chat",path:"/chat",icon:c.faCommentDots,component:r.default.createElement(s.default,null),children:["Profile"]},Settings:{type:"",name:"Settings",path:"/settings",icon:i.faCog,component:r.default.createElement(d.default,null),children:[]},Profile:{type:"",name:"Profile",path:"/profile",icon:c.faEnvelope,component:r.default.createElement(l.default,null),children:[]},PasswordReset:{type:"",name:"PasswordReset",path:"/password-reset",icon:c.faEnvelope,component:r.default.createElement(f.default,null),children:[]},Calendar:{type:"sidebar",name:"Calendar",path:"/calendar",icon:c.faCalendarAlt,component:r.default.createElement(h.default,null),children:[]}};a.default=_},2431:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});const n=t(9163).createGlobalStyle`
  html, body, div, span, iframe,
  h1, h2, h3, h4, h5, h6, p,
  a, small, strike, strong, sub, sup, tt, var,
  b, u, i, center, ul, li,
  fieldset, form, label, legend {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0; padding: 0;
  }

  body {
    line-height: 1.5;
    font-size: 0.875rem;
    font-family: 'Inter', sans-serif;
    color: ${({theme:e})=>e.textColor};
    background: ${({theme:e})=>e.background}
  }
  
  ol, ul {
    list-style: none;
  }

  input,
  select {
    &:focus {
      outline-offset: 2px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }

`;a.default=n},6094:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.darkTheme=void 0;const n=t(4597),r=t(2510),c=t(4754),i=t(3972),o=t(6522),s=t(6322),l=t(9583),u=t(5877),f=t(7316),d=t(3944),m=t(5469);a.darkTheme={textColor:"#fff",background:"#222",borderRadius:Object.assign({},l.BORDER_RADIUS),colors:Object.assign({},n.COLORS),boxShadows:Object.assign({},s.BOX_SHADOWS),spacing:Object.assign({},r.SPACING),fontWeights:Object.assign({},u.FONT_WEIGHTS),fontSizes:Object.assign({},c.FONT_SIZES),button:Object.assign({},i.BUTTONS),alerts:Object.assign({},f.ALERTS),badges:Object.assign({},d.BADGES),avatarSize:Object.assign({},o.AVATAR_SIZES),animations:Object.assign({},m.ANIMATIONS)}},5931:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.darkTheme=void 0;var n=t(6094);Object.defineProperty(a,"darkTheme",{enumerable:!0,get:function(){return n.darkTheme}})},7490:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.lightTheme=void 0;var n=t(690);Object.defineProperty(a,"lightTheme",{enumerable:!0,get:function(){return n.lightTheme}})},690:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.lightTheme=void 0;const n=t(4597),r=t(2510),c=t(4754),i=t(3972),o=t(6522),s=t(6322),l=t(9583),u=t(5877),f=t(7316),d=t(3944),m=t(5469);a.lightTheme={textColor:"#222",background:"#f2f5fa",borderRadius:Object.assign({},l.BORDER_RADIUS),colors:Object.assign({},n.COLORS),boxShadows:Object.assign({},s.BOX_SHADOWS),spacing:Object.assign({},r.SPACING),fontWeights:Object.assign({},u.FONT_WEIGHTS),fontSizes:Object.assign({},c.FONT_SIZES),button:Object.assign({},i.BUTTONS),alerts:Object.assign({},f.ALERTS),badges:Object.assign({},d.BADGES),avatarSize:Object.assign({},o.AVATAR_SIZES),animations:Object.assign({},m.ANIMATIONS)}},1940:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.lightTheme=a.darkTheme=void 0;var n=t(5931);Object.defineProperty(a,"darkTheme",{enumerable:!0,get:function(){return n.darkTheme}});var r=t(7490);Object.defineProperty(a,"lightTheme",{enumerable:!0,get:function(){return r.lightTheme}})},7316:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ALERTS=void 0;const n=t(4597);a.ALERTS={size:{default:".75rem 1rem",link:"0",xs:"0.475rem 0.725rem",sm:".75rem 1rem",md:".75rem 1rem",lg:".75rem 1rem",xl:".75rem 1rem"},fontSize:{default:".875rem",xs:"0.75rem",sm:"0.875rem",md:".875rem",lg:"1.125rem",xl:"1.375rem"},text:{default:`${n.COLORS.white}`,ghost:`${n.COLORS.black}`,outline:`${n.COLORS.black}`,link:`${n.COLORS.brand}`},border:{success:"transparent",danger:"transparent",warning:"transparent",outline:`${n.COLORS.black}`,default:"transparent"},background:{success:`${n.COLORS.brand}`,primary:`${n.COLORS.brand}`,secondary:`${n.COLORS.black}`,ghost:"none",danger:`${n.COLORS.red}`,warning:`${n.COLORS.orange}`,outline:"none",link:"none",default:""}}},5469:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ANIMATIONS=a.FADE_IN_ANIMATION=a.FADE_OUT_ANIMATION=a.PARTIAL_FADE_IN_ANIMATION=a.PARTIAL_FADE_OUT_ANIMATION=a.SLIDE_OUT_ANIMATION=a.SLIDE_IN_ANIMATION=void 0;const n=t(9163);a.SLIDE_IN_ANIMATION=n.keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
    transform: translateX(100%);
  }
  1% {
    visibility: visible;
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,a.SLIDE_OUT_ANIMATION=n.keyframes`
  0% {
    visibility: visible;
    transform: translateX(0);
    opacity: 1;
  }
  99% {
    visibility: visible;
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
    visibility: hidden;
  }
`,a.PARTIAL_FADE_OUT_ANIMATION=n.keyframes`
  0% {
    visibility: visible;
    opacity: 0.2;
  }

  99% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    visibility: hidden;
    opacity: 0;
  }
`,a.PARTIAL_FADE_IN_ANIMATION=n.keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }

  1% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 0.2;
  }
`,a.FADE_OUT_ANIMATION=n.keyframes`
  0% {
    visibility: visible;
    opacity: 1;
  }

  99% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    visibility: hidden;
    opacity: 0;
  }
`,a.FADE_IN_ANIMATION=n.keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }

  1% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
`,a.ANIMATIONS={fadeIn:a.FADE_IN_ANIMATION,fadeOut:a.FADE_OUT_ANIMATION,partialFadeIn:a.PARTIAL_FADE_IN_ANIMATION,partialFadeOut:a.PARTIAL_FADE_OUT_ANIMATION,slideIn:a.SLIDE_IN_ANIMATION,slideOut:a.SLIDE_OUT_ANIMATION}},6522:(e,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.AVATAR_SIZES=void 0,a.AVATAR_SIZES={default:"3rem",xs:"2.25rem",sm:"2.5rem",md:"3rem",lg:"4rem",xl:"5rem"}},3944:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.BADGES=void 0;const n=t(4597);a.BADGES={size:{default:".75rem 1rem",link:"0",xs:"0.475rem 0.725rem",sm:"0.475rem 0.725rem",md:"0.475rem 0.725rem",lg:"0.475rem 0.725rem",xl:"0.475rem 0.725rem"},fontSize:{default:".875rem",xs:"0.475rem",sm:"0.875rem",md:".875rem",lg:"1.125rem",xl:"1.375rem"},text:{glass:`${n.COLORS.white}`,info:`${n.COLORS.black}`,danger:`${n.COLORS.white}`,warning:`${n.COLORS.white}`,success:`${n.COLORS.white}`},border:{glass:`${n.COLORS.white}`,info:`${n.COLORS.black}`,danger:`${n.COLORS.white}`,warning:`${n.COLORS.white}`,success:`${n.COLORS.white}`},background:{glass:`${n.COLORS.white}`,info:`${n.COLORS.blue}`,danger:`${n.COLORS.red}`,warning:`${n.COLORS.orange}`,success:`${n.COLORS.brand}`}}},9583:(e,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.BORDER_RADIUS=void 0,a.BORDER_RADIUS={default:".42rem",md:".42rem",full:"999px"}},6322:(e,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.BOX_SHADOWS=void 0,a.BOX_SHADOWS={default:"0 10px 30px 0 rgb(24 28 33 / 5%)",sm:"0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)"}},6498:(e,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});const t={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1440},n={xs:`(min-width: ${t.xs}px)`,sm:`(min-width: ${t.sm}px)`,lg:`(min-width: ${t.lg}px)`,xl:`(min-width: ${t.xl}px)`,xxl:`(min-width: ${t.xxl}px)`};a.default={size:t,device:n}},3972:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.BUTTONS=void 0;const n=t(6250),r=t(4597);a.BUTTONS={size:{default:".75rem 1rem",link:"0",xs:"0.475rem 0.725rem",sm:".75rem 1rem",md:".75rem 1rem",lg:".75rem 1rem",xl:".75rem 1rem"},fontSize:{default:".875rem",xs:"0.75rem",sm:"0.875rem",md:".875rem",lg:"1.125rem",xl:"1.375rem"},text:{default:`${r.COLORS.white}`,ghost:`${r.COLORS.black}`,link:`${r.COLORS.brand}`},border:{success:"transparent",danger:"transparent",warning:"transparent",outline:"1px solid",default:"transparent"},background:{success:`${r.COLORS.brand}`,primary:`${r.COLORS.brand}`,secondary:`${r.COLORS.black}`,ghost:"none",danger:`${r.COLORS.red}`,warning:`${r.COLORS.orange}`,outline:"none",link:"none",default:`${r.COLORS.brand}`},backgroundHover:{link:"none",success:(0,n.lighten)(.1,`${r.COLORS.brand}`),primary:(0,n.lighten)(.1,`${r.COLORS.brand}`),secondary:(0,n.lighten)(.1,`${r.COLORS.black}`),ghost:`${r.COLORS.lightGray}`,danger:(0,n.lighten)(.1,`${r.COLORS.red}`),warning:(0,n.lighten)(.1,`${r.COLORS.orange}`),default:(0,n.lighten)(.1,`${r.COLORS.brand}`)}}},4597:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.COLORS=void 0;const n=t(6250);a.COLORS={default:"#111827",violet:"#6c4af2",violetLight:"#e2d9f3",blue:"#007bff",violetDark:"#6c4af2",brand:"#2ecc71",brandLight:"#d1f5e078",brandDark:(0,n.darken)(.1,"#2ecc71"),secondary:"#23263a",success:"#2ecc71",hover:"#f5f7f9",orange:"orange",warning:"orange",danger:"#e53935",white:"#fff",dark:"#223150",muted:"#6c757d",glass:"rgba(255,255,255,.8)",red:"#e11d48",pinkLight:"#f7d6e6",pinkDark:"#d63384",green:"#00d97e",greenDark:"#065f46",greenLight:"#d1fae5",gray:"#667085",lightGray:"#ebeef2",lightBlue:"rgba(78,103,235,0.1)",black:"#212529",gradient:"linear-gradient(270deg,#ffb04f 40%,#ff8961,#ff50b8,#cb5eee)"}},4754:(e,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.FONT_SIZES=void 0,a.FONT_SIZES={default:"1rem",h1:"1.8rem",h2:"1.6rem",h3:"1.4rem",h4:"1.2rem",h5:"0.975rem",h6:"0.75rem",p:"1rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.2rem",xl:"1.5rem",xxl:"2.4rem"}},5877:(e,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.FONT_WEIGHTS=void 0,a.FONT_WEIGHTS={bold:700,medium:600,regular:400}},7228:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.HEADINGS_STYLES_MOBILE=a.HEADINGS_STYLES_DESKTOP=void 0;const n=t(5877),r=t(4754);a.HEADINGS_STYLES_DESKTOP={h1:{fontSize:r.FONT_SIZES.h1,fontWeight:n.FONT_WEIGHTS.bold},h2:{fontSize:r.FONT_SIZES.h2,fontWeight:n.FONT_WEIGHTS.bold},h3:{fontSize:r.FONT_SIZES.h3,fontWeight:n.FONT_WEIGHTS.bold},h4:{fontSize:r.FONT_SIZES.h4,fontWeight:n.FONT_WEIGHTS.bold},h5:{fontSize:r.FONT_SIZES.h5,fontWeight:n.FONT_WEIGHTS.bold,letterSpacing:"0.05rem"},h6:{fontSize:r.FONT_SIZES.h6,fontWeight:n.FONT_WEIGHTS.bold,letterSpacing:"0.05rem"}},a.HEADINGS_STYLES_MOBILE={h1:Object.assign(Object.assign({},a.HEADINGS_STYLES_DESKTOP.h1),{fontSize:"3.157rem"}),h2:Object.assign(Object.assign({},a.HEADINGS_STYLES_DESKTOP.h2),{fontSize:"2.369rem"}),h3:Object.assign(Object.assign({},a.HEADINGS_STYLES_DESKTOP.h3),{fontSize:"1.777rem"}),h4:Object.assign(Object.assign({},a.HEADINGS_STYLES_DESKTOP.h4),{fontSize:"1.333rem"}),h5:Object.assign({},a.HEADINGS_STYLES_DESKTOP.h5),h6:Object.assign({},a.HEADINGS_STYLES_DESKTOP.h6)}},2510:(e,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.SPACING=void 0,a.SPACING={none:"0",xs:"0.5rem",sm:"0.625rem",md:"1rem",lg:"2rem",xl:"4rem",xxl:"8rem"}},7462:(e,a,t)=>{"use strict";function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(a,{Z:()=>n})},426:e=>{"use strict";e.exports=JSON.parse('{"reservations":{"inboxOwner":"host","conversations":[{"inboxOwner":"host","id":"469783","context":{"id":"413394","reservationOrderId":false,"inquiryId":"413394","type":"inquiry","email":"","phone":"","orderNumber":"","dateFrom":"2021-12-31","dateTo":"2022-01-02","nbAdults":"16","nbChildren":"0","childrenAges":[],"totalPrice":"","totalPriceDiscounted":"","totalPriceValue":"","totalPriceDiscountedValue":"","status":"rejected","statusName":"Zapytanie","paymentStatus":"","paymentUrl":"","prepaymentValue":"","prepaymentValueDiscounted":"","prepaymentValuePrice":"","prepaymentValuePriceDiscounted":"","prepaymentValueCurrency":"","prepaymentValuePercentage":"","prepaymentHoursToPay":"","payoffAmount":"","hostActions":{"accept":false,"reject":false,"replace":true,"reply":true},"hostActionsTimeout":"","guestActions":[],"orderItems":null,"guestActionsTimeout":"","rejectedAt":"2021-11-21 13:36","acceptedAt":"","paidAt":"","daysBetweenTermText":"2 noce","isRefundableDeposit":false,"isActiveFreeCancellation":false,"isPaidoff":false,"isUseGovernmentVoucher":false,"stayPackage":[]},"messages":[{"id":1,"sender":"guest","type":"HostAcceptMessage","text":"Can I ask something?"},{"id":2,"type":"HostAcceptMessage","sender":"host","text":"Definately. We are happy to help you."}],"host":{"offerId":"9223","name":"Leśny Zakątek"},"guest":{"firstName":"Danuta","name":"Danuta K.","fullName":"Danuta Kik","addedAt":"","unreadLastMessage":false},"statusName":"Odrzucona","isConfirmedStay":false,"lastMessageTime":"2021-11-21 13:36","firstMessageTime":"2021-11-21 13:24","previewUrl":"/inbox/469783/preview","isHostRead":true,"isGuestRead":false},{"inboxOwner":"host","id":"459262","context":{"id":"61044","reservationOrderId":false,"inquiryId":"61044","type":"reservationOrder","email":"","phone":"","orderNumber":"","dateFrom":"2021-10-20","dateTo":"2021-10-22","nbAdults":"2","nbChildren":"0","childrenAges":[],"totalPrice":"360 PLN","totalPriceDiscounted":"","totalPriceValue":"","totalPriceDiscountedValue":"","status":"rejected","statusName":"Prośba o rezerwację","paymentStatus":"","paymentUrl":"","prepaymentValue":"","prepaymentValueDiscounted":"","prepaymentValuePrice":"","prepaymentValuePriceDiscounted":"","prepaymentValueCurrency":"","prepaymentValuePercentage":"","prepaymentHoursToPay":"","payoffAmount":"","hostActions":[],"hostActionsTimeout":"","guestActions":[],"orderItems":null,"guestActionsTimeout":"","rejectedAt":"","acceptedAt":"","paidAt":"","daysBetweenTermText":"2 noce","isRefundableDeposit":false,"isActiveFreeCancellation":false,"isPaidoff":false,"isUseGovernmentVoucher":false,"stayPackage":[]},"messages":[{"id":1,"type":"HostAcceptMessage","sender":"guest","text":"Can I ask something?"},{"id":2,"type":"HostAcceptMessage","sender":"host","text":"Definately. We are happy to help you."}],"host":{"offerId":"9223","name":"Leśny Zakątek"},"guest":{"firstName":"Marta","name":"Marta B.","fullName":"Marta Bojczuk","addedAt":"","unreadLastMessage":false},"statusName":"Odrzucona","isConfirmedStay":false,"lastMessageTime":"2021-10-07 20:43","firstMessageTime":"2021-10-07 17:37","previewUrl":"/inbox/459262/preview","isHostRead":true,"isGuestRead":false},{"inboxOwner":"host","id":"459256","context":{"id":"404802","reservationOrderId":false,"inquiryId":"404802","type":"inquiry","email":"","phone":"","orderNumber":"","dateFrom":"2021-10-23","dateTo":"2021-10-24","nbAdults":"2","nbChildren":"0","childrenAges":[],"totalPrice":"","totalPriceDiscounted":"","totalPriceValue":"","totalPriceDiscountedValue":"","status":"rejected","statusName":"Zapytanie","paymentStatus":"","paymentUrl":"","prepaymentValue":"","prepaymentValueDiscounted":"","prepaymentValuePrice":"","prepaymentValuePriceDiscounted":"","prepaymentValueCurrency":"","prepaymentValuePercentage":"","prepaymentHoursToPay":"","payoffAmount":"","hostActions":{"accept":false,"reject":false,"replace":true,"reply":true},"hostActionsTimeout":"","guestActions":[],"orderItems":null,"guestActionsTimeout":"","rejectedAt":"2021-10-07 19:26","acceptedAt":"","paidAt":"","daysBetweenTermText":"1 noc","isRefundableDeposit":false,"isActiveFreeCancellation":false,"isPaidoff":false,"isUseGovernmentVoucher":false,"stayPackage":[]},"messages":[{"id":1,"type":"HostAcceptMessage","sender":"guest","text":"Can I ask something?"},{"id":2,"type":"HostAcceptMessage","sender":"host","text":"Definately. We are happy to help you."}],"host":{"type":"HostAcceptMessage","offerId":"9223","name":"Leśny Zakątek"},"guest":{"firstName":"Marta","name":"Marta B.","fullName":"Marta Bojczuk","addedAt":"","unreadLastMessage":false},"statusName":"Odrzucona","isConfirmedStay":false,"lastMessageTime":"2021-10-07 19:26","firstMessageTime":"2021-10-07 17:14","previewUrl":"/inbox/459256/preview","isHostRead":true,"isGuestRead":true},{"inboxOwner":"host","id":"459254","context":{"id":"61042","reservationOrderId":false,"inquiryId":"61042","type":"reservationOrder","email":"","phone":"","orderNumber":"","dateFrom":"2021-10-09","dateTo":"2021-10-10","nbAdults":"1","nbChildren":"0","childrenAges":[],"totalPrice":"115 PLN","totalPriceDiscounted":"","totalPriceValue":"","totalPriceDiscountedValue":"","status":"rejected","statusName":"Prośba o rezerwację","paymentStatus":"","paymentUrl":"","prepaymentValue":"","prepaymentValueDiscounted":"","prepaymentValuePrice":"","prepaymentValuePriceDiscounted":"","prepaymentValueCurrency":"","prepaymentValuePercentage":"","prepaymentHoursToPay":"","payoffAmount":"","hostActions":[],"hostActionsTimeout":"","guestActions":[],"orderItems":null,"guestActionsTimeout":"","rejectedAt":"","acceptedAt":"","paidAt":"","daysBetweenTermText":"1 noc","isRefundableDeposit":false,"isActiveFreeCancellation":false,"isPaidoff":false,"isUseGovernmentVoucher":false,"stayPackage":[]},"messages":[{"id":1,"type":"HostAcceptMessage","sender":"guest","text":"Can I ask something?"},{"id":2,"type":"HostAcceptMessage","sender":"host","text":"Definately. We are happy to help you."}],"host":{"offerId":"9223","name":"Leśny Zakątek"},"guest":{"firstName":"Magdalena","name":"Magdalena K.","fullName":"Magdalena Karaś","addedAt":"","unreadLastMessage":false},"statusName":"Odrzucona","isConfirmedStay":false,"lastMessageTime":"2021-10-08 07:39","firstMessageTime":"2021-10-07 16:37","previewUrl":"/inbox/459254/preview","isHostRead":true,"isGuestRead":false},{"inboxOwner":"host","id":"458791","context":{"id":"60967","reservationOrderId":false,"inquiryId":"60967","type":"reservationOrder","email":"","phone":"","orderNumber":"","dateFrom":"2021-10-08","dateTo":"2021-10-09","nbAdults":"1","nbChildren":"0","childrenAges":[],"totalPrice":"115 PLN","totalPriceDiscounted":"","totalPriceValue":"","totalPriceDiscountedValue":"","status":"paid","statusName":"Rezerwacja","paymentStatus":"","paymentUrl":"","prepaymentValue":"","prepaymentValueDiscounted":"","prepaymentValuePrice":"","prepaymentValuePriceDiscounted":"","prepaymentValueCurrency":"","prepaymentValuePercentage":"","prepaymentHoursToPay":"","payoffAmount":"","hostActions":[],"hostActionsTimeout":"","guestActions":[],"orderItems":null,"guestActionsTimeout":"","rejectedAt":"","acceptedAt":"2021-10-04 19:17","paidAt":"","daysBetweenTermText":"1 noc","isRefundableDeposit":false,"isActiveFreeCancellation":false,"isPaidoff":false,"isUseGovernmentVoucher":false,"stayPackage":[],"name":"Marcin Palczynski","surname":""},"messages":[{"id":1,"type":"HostAcceptMessage","sender":"guest","text":"Can I ask something?"},{"id":2,"type":"HostAcceptMessage","sender":"host","text":"Definately. We are happy to help you."}],"host":{"offerId":"9223","name":"Leśny Zakątek"},"guest":{"firstName":"Marcin","name":"Marcin P.","fullName":"Marcin Palczynski","addedAt":"","unreadLastMessage":false},"statusName":"Opłacona","isConfirmedStay":false,"lastMessageTime":"2021-10-07 16:10","firstMessageTime":"2021-10-04 18:37","previewUrl":"/inbox/458791/preview","isHostRead":true,"isGuestRead":false},{"inboxOwner":"host","id":"456751","context":{"id":"60482","reservationOrderId":false,"inquiryId":"60482","type":"reservationOrder","email":"","phone":"","orderNumber":"","dateFrom":"2021-09-24","dateTo":"2021-09-25","nbAdults":"2","nbChildren":"0","childrenAges":[],"totalPrice":"145 PLN","totalPriceDiscounted":"","totalPriceValue":"","totalPriceDiscountedValue":"","status":"rejected_by_user","statusName":"Rezerwacja","paymentStatus":"","paymentUrl":"","prepaymentValue":"","prepaymentValueDiscounted":"","prepaymentValuePrice":"","prepaymentValuePriceDiscounted":"","prepaymentValueCurrency":"","prepaymentValuePercentage":"","prepaymentHoursToPay":"","payoffAmount":"","hostActions":[],"hostActionsTimeout":"","guestActions":[],"orderItems":null,"guestActionsTimeout":"","rejectedAt":"","acceptedAt":"2021-09-21 15:24","paidAt":"","daysBetweenTermText":"1 noc","isRefundableDeposit":false,"isActiveFreeCancellation":false,"isPaidoff":false,"isUseGovernmentVoucher":false,"stayPackage":[]},"messages":[{"id":1,"type":"HostAcceptMessage","sender":"guest","text":"Can I ask something?"},{"id":2,"type":"HostAcceptMessage","sender":"host","text":"Definately. We are happy to help you."}],"host":{"offerId":"9223","name":"Leśny Zakątek"},"guest":{"firstName":"Aleksandra","name":"Aleksandra D.","fullName":"Aleksandra Dębska","addedAt":"","unreadLastMessage":false},"statusName":"Odwołana","isConfirmedStay":false,"lastMessageTime":"2021-09-21 16:37","firstMessageTime":"2021-09-21 11:09","previewUrl":"/inbox/456751/preview","isHostRead":true,"isGuestRead":true},{"inboxOwner":"host","id":"455716","context":{"id":"60231","reservationOrderId":false,"inquiryId":"60231","type":"reservationOrder","email":"","phone":"","orderNumber":"","dateFrom":"2021-09-18","dateTo":"2021-09-19","nbAdults":"4","nbChildren":"0","childrenAges":[],"totalPrice":"280 PLN","totalPriceDiscounted":"","totalPriceValue":"","totalPriceDiscountedValue":"","status":"rejected","statusName":"Prośba o rezerwację","paymentStatus":"","paymentUrl":"","prepaymentValue":"","prepaymentValueDiscounted":"","prepaymentValuePrice":"","prepaymentValuePriceDiscounted":"","prepaymentValueCurrency":"","prepaymentValuePercentage":"","prepaymentHoursToPay":"","payoffAmount":"","hostActions":[],"hostActionsTimeout":"","guestActions":[],"orderItems":null,"guestActionsTimeout":"","rejectedAt":"","acceptedAt":"","paidAt":"","daysBetweenTermText":"1 noc","isRefundableDeposit":false,"isActiveFreeCancellation":false,"isPaidoff":false,"isUseGovernmentVoucher":false,"stayPackage":[]},"messages":[{"id":1,"type":"HostAcceptMessage","sender":"guest","text":"Can I ask something?"},{"id":2,"type":"HostAcceptMessage","sender":"host","text":"Definately. We are happy to help you."}],"host":{"offerId":"9223","name":"Leśny Zakątek"},"guest":{"firstName":"Karolina","name":"Karolina P.","fullName":"Karolina Przybył","addedAt":"","unreadLastMessage":false},"statusName":"Odrzucona","isConfirmedStay":false,"lastMessageTime":"2021-09-14 21:30","firstMessageTime":"2021-09-14 21:14","previewUrl":"/inbox/455716/preview","isHostRead":true,"isGuestRead":false},{"inboxOwner":"host","id":"454321","context":{"id":"59911","reservationOrderId":false,"inquiryId":"59911","type":"reservationOrder","email":"","phone":"","orderNumber":"","dateFrom":"2021-09-11","dateTo":"2021-09-12","nbAdults":"2","nbChildren":"0","childrenAges":[],"totalPrice":"115 PLN","totalPriceDiscounted":"","totalPriceValue":"","totalPriceDiscountedValue":"","status":"rejected","statusName":"Prośba o rezerwację","paymentStatus":"","paymentUrl":"","prepaymentValue":"","prepaymentValueDiscounted":"","prepaymentValuePrice":"","prepaymentValuePriceDiscounted":"","prepaymentValueCurrency":"","prepaymentValuePercentage":"","prepaymentHoursToPay":"","payoffAmount":"","hostActions":[],"hostActionsTimeout":"","guestActions":[],"orderItems":null,"guestActionsTimeout":"","rejectedAt":"","acceptedAt":"","paidAt":"","daysBetweenTermText":"1 noc","isRefundableDeposit":false,"isActiveFreeCancellation":false,"isPaidoff":false,"isUseGovernmentVoucher":false,"stayPackage":[]},"messages":[{"id":1,"type":"HostAcceptMessage","sender":"guest","text":"Can I ask something?"},{"id":2,"type":"HostAcceptMessage","sender":"host","text":"Definately. We are happy to help you."}],"host":{"offerId":"9223","name":"Leśny Zakątek"},"guest":{"firstName":"Lidia","name":"Lidia K.","fullName":"Lidia Kałuża","addedAt":"","unreadLastMessage":false},"statusName":"Odrzucona","isConfirmedStay":false,"lastMessageTime":"2021-09-09 06:53","firstMessageTime":"2021-09-09 06:44","previewUrl":"/inbox/454321/preview","isHostRead":true,"isGuestRead":false},{"inboxOwner":"host","id":"454075","context":{"id":"59853","reservationOrderId":false,"inquiryId":"59853","type":"reservationOrder","email":"","phone":"","orderNumber":"","dateFrom":"2021-09-10","dateTo":"2021-09-12","nbAdults":"2","nbChildren":"0","childrenAges":[],"totalPrice":"230 PLN","totalPriceDiscounted":"","totalPriceValue":"","totalPriceDiscountedValue":"","status":"rejected","statusName":"Prośba o rezerwację","paymentStatus":"","paymentUrl":"","prepaymentValue":"","prepaymentValueDiscounted":"","prepaymentValuePrice":"","prepaymentValuePriceDiscounted":"","prepaymentValueCurrency":"","prepaymentValuePercentage":"","prepaymentHoursToPay":"","payoffAmount":"","hostActions":[],"hostActionsTimeout":"","guestActions":[],"orderItems":null,"guestActionsTimeout":"","rejectedAt":"","acceptedAt":"","paidAt":"","daysBetweenTermText":"2 noce","isRefundableDeposit":false,"isActiveFreeCancellation":false,"isPaidoff":false,"isUseGovernmentVoucher":false,"stayPackage":[]},"messages":[{"id":1,"type":"HostAcceptMessage","sender":"guest","text":"Can I ask something?"},{"id":2,"type":"HostAcceptMessage","sender":"host","text":"Definately. We are happy to help you."}],"host":{"offerId":"9223","name":"Leśny Zakątek"},"guest":{"firstName":"Lidia","name":"Lidia K.","fullName":"Lidia Kałuża","addedAt":"","unreadLastMessage":false},"statusName":"Odrzucona","isConfirmedStay":false,"lastMessageTime":"2021-09-08 13:00","firstMessageTime":"2021-09-08 12:38","previewUrl":"/inbox/454075/preview","isHostRead":true,"isGuestRead":false},{"inboxOwner":"host","id":"451297","context":{"id":"398506","reservationOrderId":false,"inquiryId":"398506","type":"inquiry","email":"","phone":"","orderNumber":"","dateFrom":"2021-08-28","dateTo":"2021-08-29","nbAdults":"2","nbChildren":"0","childrenAges":[],"totalPrice":"","totalPriceDiscounted":"","totalPriceValue":"","totalPriceDiscountedValue":"","status":"rejected","statusName":"Zapytanie","paymentStatus":"","paymentUrl":"","prepaymentValue":"","prepaymentValueDiscounted":"","prepaymentValuePrice":"","prepaymentValuePriceDiscounted":"","prepaymentValueCurrency":"","prepaymentValuePercentage":"","prepaymentHoursToPay":"","payoffAmount":"","hostActions":{"accept":false,"reject":false,"replace":true,"reply":true},"hostActionsTimeout":"","guestActions":[],"orderItems":null,"guestActionsTimeout":"","rejectedAt":"2021-08-27 22:15","acceptedAt":"","paidAt":"","daysBetweenTermText":"1 noc","isRefundableDeposit":false,"isActiveFreeCancellation":false,"isPaidoff":false,"isUseGovernmentVoucher":false,"stayPackage":[]},"messages":[{"id":1,"type":"HostAcceptMessage","sender":"guest","text":"Can I ask something?"},{"id":2,"type":"HostAcceptMessage","sender":"host","text":"Definately. We are happy to help you."}],"host":{"offerId":"9223","name":"Leśny Zakątek"},"guest":{"firstName":"Edyta","name":"Edyta K.","fullName":"Edyta K","addedAt":"","unreadLastMessage":false},"statusName":"Odrzucona","isConfirmedStay":false,"lastMessageTime":"2021-08-27 22:15","firstMessageTime":"2021-08-27 20:38","previewUrl":"/inbox/451297/preview","isHostRead":true,"isGuestRead":false}]}}')}},a={};function t(n){var r=a[n];if(void 0!==r)return r.exports;var c=a[n]={id:n,loaded:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t(7927)})();