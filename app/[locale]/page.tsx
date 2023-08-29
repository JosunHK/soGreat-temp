import { nav } from '#/lib/menu';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Examples</h1>

      <div className="space-y-10 text-white">
        {nav.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {section.name}
                <Link
                  href={`/${section.slug}`}
                  key={section.name}
                  className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                >
                  <div className="font-medium text-gray-200 group-hover:text-gray-50">
                    {section.name}
                  </div>

                  {section.description ? (
                    <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                      {section.description}
                    </div>
                  ) : null}
                </Link>
              </div>
              {/* <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                  );
                })}
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
