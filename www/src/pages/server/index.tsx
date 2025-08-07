import Map from "@/components/map";
import DefaultLayout from "@/layouts/default";

export default function ServerPage() {
    return (
        <DefaultLayout>
            <div className="w-full h-full">
                <Map />
            </div>
        </DefaultLayout>
    )
}
