import { ArrayType } from '@angular/compiler';

export interface Article {
title: string;
images: HTMLImageElement;
intro: string;
body: string;
tags: ArrayType;
}