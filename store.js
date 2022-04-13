import { makeAutoObservable } from "mobx";

export const searchByContainerNumber = makeAutoObservable({
  details: [],
  setDetails(newDetails) {
    this.details = newDetails;
  },
});

export const searchByHblNumber = makeAutoObservable({
  details: [],
  setDetails(newDetails) {
    this.details = newDetails;
  },
});
