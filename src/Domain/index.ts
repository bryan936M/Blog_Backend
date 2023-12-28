import BlogFactory from "./Blog";
import {randomUUID} from "crypto"

const makeId = () => randomUUID();

export default new BlogFactory({makeId})