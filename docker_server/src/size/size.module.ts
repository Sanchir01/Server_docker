import { Module } from '@nestjs/common'
import { SizeResolver } from './size.resolver'
import { SizeService } from './size.service'

@Module({
	providers: [SizeResolver, SizeService,],
	imports: [SizeModule]
})
export class SizeModule {}
