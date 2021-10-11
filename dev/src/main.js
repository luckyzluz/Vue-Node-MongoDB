// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Zblog from './Zblog'
import router from './router'
import store from './store/index.js';
import Config from './config/index'
import axios from "axios";
import './styles/reset.css';

import './assets/icons/iconfont/iconfont.css';

import * as api from "./utils/api.js";
Vue.prototype.$api= api

// ----------------------
import {
    // Pagination,
    // Dialog,
    // Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    // InputNumber,
    // Radio,
    RadioGroup,
    RadioButton,
    // Checkbox,
    // CheckboxButton,
    // CheckboxGroup,
    // Switch,
    Select,
    // Option,
    // OptionGroup,
    Button,
    // ButtonGroup,
    // Table,
    // TableColumn,
    // DatePicker,
    // TimeSelect,
    // TimePicker,
    // Popover,
    // Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    // Tabs,
    // TabPane,
    // Tag,
    // Tree,
    // Alert,
    // Slider,
    // Icon,
    Row,
    Col,
    Upload,
    // Progress,
    // Spinner,
    // Badge,
    // Card,
    // Rate,
    // Steps,
    // Step,
    // Carousel,
    // CarouselItem,
    // Collapse,
    // CollapseItem,
    // Cascader,
    // ColorPicker,
    // Transfer,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    // Timeline,
    // TimelineItem,
    // Link,
    // Divider,
    // Image,
    // Calendar,
    // Backtop,
    // PageHeader,
    // CascaderPanel,
    // Loading,
    // MessageBox,
    Message,
    // Notification,
    Drawer,
    Avatar
  } from 'element-ui';
//   Vue.use(Pagination);
//   Vue.use(Dialog);
//   Vue.use(Autocomplete);
  Vue.use(Dropdown);
  Vue.use(DropdownMenu);
  Vue.use(DropdownItem);
  Vue.use(Menu);
  Vue.use(Submenu);
  Vue.use(MenuItem);
  Vue.use(MenuItemGroup);
  Vue.use(Input);
//   Vue.use(InputNumber);
//   Vue.use(Radio);
  Vue.use(RadioGroup);
  Vue.use(RadioButton);
//   Vue.use(Checkbox);
//   Vue.use(CheckboxButton);
//   Vue.use(CheckboxGroup);
//   Vue.use(Switch);
  Vue.use(Select);
//   Vue.use(Option);
//   Vue.use(OptionGroup);
  Vue.use(Button);
//   Vue.use(ButtonGroup);
//   Vue.use(Table);
//   Vue.use(TableColumn);
//   Vue.use(DatePicker);
//   Vue.use(TimeSelect);
//   Vue.use(TimePicker);
//   Vue.use(Popover);
//   Vue.use(Tooltip);
  Vue.use(Breadcrumb);
  Vue.use(BreadcrumbItem);
  Vue.use(Form);
  Vue.use(FormItem);
//   Vue.use(Tabs);
//   Vue.use(TabPane);
//   Vue.use(Tag);
//   Vue.use(Tree);
//   Vue.use(Alert);
//   Vue.use(Slider);
//   Vue.use(Icon);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Upload);
//   Vue.use(Progress);
//   Vue.use(Spinner);
//   Vue.use(Badge);
//   Vue.use(Card);
//   Vue.use(Rate);
//   Vue.use(Steps);
//   Vue.use(Step);
//   Vue.use(Carousel);
//   Vue.use(CarouselItem);
//   Vue.use(Collapse);
//   Vue.use(CollapseItem);
//   Vue.use(Cascader);
//   Vue.use(ColorPicker);
//   Vue.use(Transfer);
  Vue.use(Container);
  Vue.use(Header);
  Vue.use(Aside);
  Vue.use(Main);
  Vue.use(Footer);
//   Vue.use(Timeline);
//   Vue.use(TimelineItem);
//   Vue.use(Link);
//   Vue.use(Divider);
//   Vue.use(Image);
//   Vue.use(Calendar);
//   Vue.use(Backtop);
//   Vue.use(PageHeader);
//   Vue.use(CascaderPanel);
Vue.use(Drawer),
Vue.use(Avatar)
  
//   Vue.use(Loading.directive);
  
//   Vue.prototype.$loading = Loading.service;
//   Vue.prototype.$msgbox = MessageBox;
//   Vue.prototype.$alert = MessageBox.alert;
//   Vue.prototype.$confirm = MessageBox.confirm;
//   Vue.prototype.$prompt = MessageBox.prompt;
//   Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
// -------element引入
Vue.prototype.z_deploy = Config
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.component('remote-script', {
  render: function (createElement) {
      var self = this;
      return createElement('script', {
          attrs: {
              type: 'text/javascript',
              src: this.src
          },
          on: {
              load: function (event) {
                  self.$emit('load', event);
              },
              error: function (event) {
                  self.$emit('error', event);
              },
              readystatechange: function (event) {
                  if (this.readyState == 'complete') {
                      self.$emit('load', event);
                  }
              }
          }
      });
  },
  props: {
      src: {
          type: String,
          required: true
      }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#zblog',
  router,
  store,
  components: { Zblog },
  template: '<Zblog/>'
})
