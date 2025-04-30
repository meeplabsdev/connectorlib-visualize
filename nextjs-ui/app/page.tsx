import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";

export default function Page() {
	return (
		<div className="flex flex-col h-full">
			<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
				<SectionCards />
			</div>
			<div className="flex-1 max-h-full px-4 lg:px-6 pb-4 lg:pb-6">
				<ChartAreaInteractive />
			</div>
		</div>
	);
}
