import {
  Category,
  CategoryArr,
} from "../../../AddPost/components/CategoryAddPost/type";

export const categoryArr: CategoryArr = [
  {
    id: Category.DAILY,
    value: "DAILY",
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.GROUP,
    value: "GROUP",
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.ADS,
    value: "ADS",
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.INFO,
    value: "INFO",
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.EVENT,
    value: "EVENT",
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.PRESENT,
    value: "PRESENT",
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
];
