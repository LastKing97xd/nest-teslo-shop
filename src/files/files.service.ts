import { BadRequestException, Injectable } from '@nestjs/common';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
  getStaticProductImage(imageName: string) {
    const imagePath = join(__dirname, '../../static/products', imageName);
    if (!existsSync(imagePath)) {
      throw new BadRequestException(`Image not found ${imageName}`);
    }
    return createReadStream(imagePath);
  }
}
