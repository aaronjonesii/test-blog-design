import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anon-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent implements OnInit {
  story = {
    content: '\n' +
      '\n' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus purus vel rutrum luctus. Aenean in aliquet leo, in tristique enim. Integer id nibh lectus. Phasellus maximus malesuada volutpat. In nulla nisi, placerat ut ligula vitae, dapibus ultrices elit. Morbi pharetra mattis semper. Vivamus dignissim blandit dolor eu aliquet. Curabitur nec porttitor sapien. Etiam purus risus, facilisis nec consectetur vel, dictum vitae dolor. Integer eget nunc diam. In dolor ipsum, lacinia sed massa ac, egestas placerat ante. Ut libero quam, semper at auctor ut, consectetur vel tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce aliquam diam in venenatis pharetra. Morbi ornare, massa id consectetur pretium, lorem lorem finibus mi, quis viverra augue ipsum a lectus. Vestibulum sit amet aliquam dui, in efficitur urna.\n' +
      '\n' +
      'Sed posuere pellentesque erat, ac eleifend mi lobortis in. Morbi ut orci a nulla viverra convallis. Sed vestibulum laoreet sem. Donec eget massa dictum mauris commodo facilisis. Etiam sit amet nisi a elit efficitur imperdiet at et est. Nunc ut convallis nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.\n' +
      '\n' +
      'Etiam consectetur tortor a urna semper semper. Phasellus aliquet diam eget laoreet sodales. Etiam magna neque, commodo non fermentum at, placerat at magna. Cras tincidunt vestibulum sem vitae congue. Ut hendrerit auctor augue, eu consectetur justo varius quis. Nullam ac feugiat augue. Ut at mi nulla. Aliquam maximus, erat id tincidunt accumsan, metus sapien lacinia arcu, vel ultrices libero elit at mauris.\n' +
      '\n' +
      'Aliquam gravida sollicitudin libero, ac auctor mauris egestas quis. Proin molestie posuere orci, sit amet consectetur felis fringilla id. Donec suscipit justo ut dui placerat, sit amet fermentum purus dignissim. Mauris magna magna, gravida eget efficitur vitae, aliquet vel orci. Proin mi enim, accumsan sed eros vel, lobortis consectetur quam. Fusce suscipit mollis tincidunt. Donec euismod est eu sapien mattis fermentum. Etiam ac est orci. Vestibulum sit amet magna purus. Morbi sed ipsum sit amet nunc maximus malesuada eu at nisi. Sed ullamcorper lobortis ultrices. Cras ac placerat enim, laoreet convallis lacus. Duis eu nunc interdum, finibus diam accumsan, malesuada nibh. In hac habitasse platea dictumst. Sed pharetra tellus a feugiat sodales.\n' +
      '\n' +
      'In justo orci, suscipit sed pellentesque eget, accumsan vel dolor. Vivamus scelerisque accumsan risus. Curabitur nec nulla et felis tristique efficitur. Curabitur a eleifend nulla. Nunc placerat ac erat eget ultrices. Sed sagittis, mi eleifend porta mollis, est nisl ornare sem, vitae tincidunt eros tortor sit amet nunc. Nam ut egestas purus. Vivamus pretium fringilla augue, non consequat leo congue eget. Proin faucibus viverra arcu, a sagittis nulla volutpat sit amet. '
  }

  constructor() { }

  ngOnInit(): void {}

}
