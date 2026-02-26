import type { InputErrorTypes } from "@scripts/types/input";

export interface ContactField {
  id: string;
  name: string;
  label: string;
  pattern: RegExp;
  minLength: number;
  maxLength: number;
  errors: InputErrorTypes;
}

export interface MapConfig {
  lat: number;
  lng: number;
  zoom: number;
  minZoom?: number;
  maxZoom?: number;
}
