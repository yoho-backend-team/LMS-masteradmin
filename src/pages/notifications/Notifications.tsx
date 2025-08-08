import { useState } from 'react';
import AddNotificationForm from './AddNotificationForm';

const stats = [
  {
    title: 'Total Institute',
    percentage: 45,
    progressColor: 'stroke-red-500',
    icon: '⚡',
    bgColor: 'bg-white',
    textColor: 'text-black',
  },
  {
    title: 'Active Institute',
    percentage: 9,
    progressColor: 'stroke-purple-500',
    icon: '🟣',
    bgColor: 'bg-white',
    textColor: 'text-black',
  },
  {
    title: 'Blocked Institute',
    percentage: 25,
    progressColor: 'stroke-yellow-400',
    icon: '🟡',
    bgColor: 'bg-white',
    textColor: 'text-black',
  },
];

const SemiCircleProgress = ({
  percentage,
  progressColor,
}: {
  percentage: number;
  progressColor: string;
}) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dash = (percentage / 100) * (circumference / 2);

  return (
    <svg viewBox="0 0 100 50" className="w-50 h-20">
      <path
        d="M10,50 A40,40 0 0,1 90,50"
        fill="none"
        stroke="#F3F4F6"
        strokeWidth="10"
      />
      <path
        d="M10,50 A40,40 0 0,1 90,50"
        fill="none"
        className={progressColor}
        strokeWidth="10"
        strokeDasharray={`${dash} ${circumference}`}
        strokeLinecap="round"
      />
    </svg>
  );
};

const Notifications = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-8 relative">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 flex flex-col items-center shadow-md ${item.bgColor} ${item.textColor} hover:bg-[#2D6974] hover:text-white`}
          >
            <div className="text-2xl font-semibold mb-2">{item.icon}</div>
            <div className="text-lg font-medium">{item.title}</div>
            <div className="mt-4 relative">
              <SemiCircleProgress
                percentage={item.percentage}
                progressColor={item.progressColor}
              />
              <div className="absolute left-[120px] top-[40px] transform -translate-x-1/2 text-xl font-bold">
                {item.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#68B39F] hover:bg-emerald-600 text-white px-4 py-2 rounded-tl-md rounded-br-md shadow flex items-center gap-1"
        >
          + Add Notification
        </button>
      </div>

      <div className="overflow-x-auto">
        <div className="w-full bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-[#2D6974] text-white">
            <div className="flex items-center text-center">
              <div className="w-1/5 px-6 py-3">Title</div>
              <div className="w-1/5 px-6 py-3">Body</div>
              <div className="w-1/5 px-6 py-3">Institute</div>
              <div className="w-1/5 px-6 py-3">Status</div>
              <div className="w-1/5 px-6 py-3">Actions</div>
            </div>
          </div>

          <div className="text-gray-700">
            {[
              {
                title: 'Welcome',
                body: 'Creating Web',
                institute: 'Bharathidasan Uni',
                status: 'Unnn....',
              },
              {
                title: 'Design',
                body: 'Its a Course',
                institute: 'Bharathidasan Uni',
                status: 'Unnn....',
              },
              {
                title: 'Developing',
                body: 'Its one type of course',
                institute: 'Anna university',
                status: 'Unnn....',
              },
              {
                title: 'Datascience',
                body: 'Computer',
                institute: 'Bharathidasan Uni',
                status: 'Unnn....',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center text-center border-b hover:bg-gray-50 transition-all"
              >
                <div className="w-1/5 px-6 py-4">{item.title}</div>
                <div className="w-1/5 px-6 py-4">{item.body}</div>
                <div className="w-1/5 px-6 py-4">{item.institute}</div>
                <div className="w-1/5 px-6 py-4">{item.status}</div>
                <div className="w-1/5 px-6 py-4">
                  <button className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md font-medium hover:bg-emerald-200">
                    Resend
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end z-50">
          <div className="w-[400px] h-full bg-white shadow-lg overflow-y-auto transform translate-x-0 transition-transform duration-300 p-4">
            <AddNotificationForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
