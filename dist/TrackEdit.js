function R(n){window.enmity.plugins.registerPlugin(n)}const v=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const i=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const L=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const A=window.enmity.modules.common.Linking,x=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function B(n){return window.enmity.patcher.create(n)}var U="TrackEdit",F="1.0.1",H="Track edits/delete of other's messages",O=[{name:"mafu",id:"519760564755365888"}],V="#fff98a",G={name:U,version:F,description:H,authors:O,color:V};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const $=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const j=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const E=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const I=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const a=e.FormRow,z=e.FormSection;e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function b(n){return window.enmity.assets.getIDByName(n)}const p={byProps:(...n)=>window.enmity.modules.filters.byProps(...n),byName:(n,t)=>window.enmity.modules.filters.byName(n,t),byTypeName:(n,t)=>window.enmity.modules.filters.byTypeName(n,t),byDisplayName:(n,t)=>window.enmity.modules.filters.byDisplayName(n,t)};function Y(n,t){return window.enmity.modules.getModule(n,t)}function q(...n){return window.enmity.modules.bulk(...n)}function J(...n){return window.enmity.modules.getByProps(...n)}window.enmity.modules.common;const K=b("img_account_sync_github_white"),Q=b("Discord"),W=b("img_account_sync_twitter_white"),X=J("acceptInviteAndTransitionToInviteChannel");var Z=({settings:n})=>{const t=x.createThemedStyleSheet({container:{flexDirection:"row",justifyContent:"center",alignItems:"center"},image:{width:70,height:70,marginTop:20,marginLeft:20},title:{flexDirection:"column"},name:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:v.ThemeColorMap.HEADER_PRIMARY},author:{fontSize:15,paddingLeft:50,color:v.ThemeColorMap.HEADER_SECONDARY},info:{height:45,paddingTop:3,paddingBottom:3,justifyContent:"center",alignItems:"center"},footer:{color:v.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",paddingTop:10,paddingBottom:20}});return i.createElement(j,null,i.createElement(I,{style:t.container},i.createElement($,{source:{uri:"https://avatars.githubusercontent.com/u/43488869"},style:t.image}),i.createElement(I,{style:t.title},i.createElement(E,{style:t.name},"TrackEdit"),i.createElement(E,{style:t.author},"by mafu"))),i.createElement(z,{title:"INFORMATION"},i.createElement(a,{label:"Follow me on Twitter",style:t.info,trailing:a.Arrow,leading:i.createElement(a.Icon,{source:W}),onPress:()=>{A.openURL("https://twitter.com/m4fn3")}}),i.createElement(a,{label:"Visit my server for help",style:t.info,trailing:a.Arrow,leading:i.createElement(a.Icon,{source:Q}),onPress:()=>{X.acceptInviteAndTransitionToInviteChannel({inviteKey:"TrCqPTCrdq",context:{location:"Invite Button Embed"},callback:()=>{L.pop()}})}}),i.createElement(a,{label:"Check Source on GitHub",style:t.info,trailing:a.Arrow,leading:i.createElement(a.Icon,{source:K}),onPress:()=>{A.openURL("https://github.com/m4fn3/TrackEdit")}})),i.createElement(E,{style:t.footer},`v${F}`))};const ee=Y(n=>{var t,g,m;return(m=(g=(t=n._dispatcher)==null?void 0:t._actionHandlers)==null?void 0:g._dependencyGraph)==null?void 0:m.nodes}),C=ee._dispatcher._actionHandlers._dependencyGraph.nodes;function k(n){let t=Object.keys(C).filter(g=>C[g].name===n);if(t.length)return C[t[0]].actionHandler}const[ne,h,_,D]=q(p.byProps("_currentDispatchActionType","_subscriptions","_actionHandlers","_waitQueue"),p.byProps("getUser","getUsers"),p.byProps("getMessage","getMessages"),p.byProps("View")),{DCDChatManager:te}=D.NativeModules,[M,ie]=[k("MessageStore"),k("UserStore")],f=B("TrackEdit"),oe={...G,onStart(){const n=m=>m.content=="[TrackEdit]"&&m.type=="inlineCode",t=m=>m.content=="[TrackEdit]"&&m.type=="inlineCode",g=(m,o)=>({content:m,target:"usernameOnClick",context:{username:1,usernameOnClick:{linkColor:D.processColor(o)},medium:!0},type:"link"});f.before(te,"updateRows",(m,o,T)=>{var c,d,l,w;const u=JSON.parse(o[1]);for(const s of u)if(((c=s.message)==null?void 0:c.content)&&Array.isArray((d=s.message)==null?void 0:d.content)){if((l=s.message)!=null&&l.content.slice(0,1).filter(r=>t(r)).length)s.message.edited="deleted",s.message.content=[g(s.message.content.slice(1).filter(r=>!n(r)),"#FF0000")];else if((w=s.message)!=null&&w.content.filter(r=>n(r)).length){let r=s.message.content.map((y,P)=>n(y)?P:void 0).filter(y=>y!=null),S=s.message.content.slice(r[r.length-1]+1),N=s.message.content.slice(0,r[r.length-1]).filter(y=>!n(y));s.message.content=[g(N,"#797979"),...S]}}o[1]=JSON.stringify(u)}),f.before(M,"MESSAGE_UPDATE",(m,o,T)=>{var c,d,l,w;if(o[0].ignore||!o[0].guildId||((d=(c=o[0].message)==null?void 0:c.author)==null?void 0:d.id)===((l=h==null?void 0:h.getCurrentUser())==null?void 0:l.id))return;const u=_.getMessage(o[0].message.channel_id,o[0].message.id);if(!u)return;let s=u.content?u.content.split(`
`).map(S=>S.replace(/^>>>/,"").replace(/^>/,"")).join(`
`):"",r=(w=o[0].message)!=null&&w.content?o[0].message.content:"";s!==r&&(o[0].message.content=`${s} \`[TrackEdit]\`
${r}`)}),f.instead(M,"MESSAGE_DELETE",(m,o,T)=>{var c,d;const l=_.getMessage(o[0].channelId,o[0].id);if(!l||((c=l.author)==null?void 0:c.id)===((d=h==null?void 0:h.getCurrentUser())==null?void 0:d.id)){T.apply(m,o);return}let w=l.content?l.content:"";const u={type:"MESSAGE_UPDATE",guildId:o[0].guildId,message:{...l,content:`\`[TrackEdit]\`${w}`,guild_id:o[0].guildId},ignore:!0};ne.dispatch(u)})},onStop(){f.unpatchAll()},getSettingsPanel({settings:n}){return i.createElement(Z,{settings:n})}};R(oe);