import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piping'
})
export class PipingPipe implements PipeTransform {

  transform(value: string): string {
    const rank = parseInt(value)

    if (rank > 200) {
      return "Upper Rank Level: " + rank
    }
    else
    return "Lower Rank Level: " + rank
  }

}

//In this pipe example, we shall classify all numbers above 200 as UPPER CLASS and the inverse LOWER CLASS

// NEXT, pipe the name of this pipe ('piping') in the interpolated value