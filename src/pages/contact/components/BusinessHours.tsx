import { useState, useEffect } from 'react';

const US_HOLIDAYS_2025_2026: { month: number; day: number; name: string }[] = [
  { month: 1, day: 1, name: "New Year's Day" },
  { month: 1, day: 20, name: 'MLK Day' },
  { month: 2, day: 17, name: "Presidents' Day" },
  { month: 5, day: 26, name: 'Memorial Day' },
  { month: 6, day: 1, name: 'Company Holiday' },
  { month: 6, day: 19, name: 'Juneteenth' },
  { month: 7, day: 4, name: 'Independence Day' },
  { month: 9, day: 1, name: 'Labor Day' },
  { month: 10, day: 13, name: 'Columbus Day' },
  { month: 11, day: 11, name: "Veterans' Day" },
  { month: 11, day: 27, name: 'Thanksgiving' },
  { month: 12, day: 25, name: 'Christmas Day' },
  // 2026
  { month: 1, day: 1, name: "New Year's Day 2026" },
];

interface DaySchedule {
  name: string;
  open: string | null;
  close: string | null;
  closedAllDay: boolean;
  byAppt: boolean;
}

const SCHEDULE: DaySchedule[] = [
  { name: 'Sunday',    open: null,    close: null,    closedAllDay: true,  byAppt: false },
  { name: 'Monday',    open: '8:00 AM', close: '6:00 PM', closedAllDay: false, byAppt: false },
  { name: 'Tuesday',   open: '8:00 AM', close: '6:00 PM', closedAllDay: false, byAppt: false },
  { name: 'Wednesday', open: '8:00 AM', close: '6:00 PM', closedAllDay: false, byAppt: false },
  { name: 'Thursday',  open: '8:00 AM', close: '6:00 PM', closedAllDay: false, byAppt: false },
  { name: 'Friday',    open: '8:00 AM', close: '6:00 PM', closedAllDay: false, byAppt: false },
  { name: 'Saturday',  open: '9:00 AM', close: '5:00 PM', closedAllDay: false, byAppt: true  },
];

function toMinutes(timeStr: string): number {
  const [time, period] = timeStr.split(' ');
  const [h, m] = time.split(':').map(Number);
  let hours = h;
  if (period === 'PM' && h !== 12) hours += 12;
  if (period === 'AM' && h === 12) hours = 0;
  return hours * 60 + m;
}

function getESTNow(): Date {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });
  const parts = formatter.formatToParts(now);
  const getPart = (type: string) => Number(parts.find(p => p.type === type)?.value);

  const year = getPart('year');
  const month = getPart('month') - 1;
  const day = getPart('day');
  const hour = getPart('hour');
  const minute = getPart('minute');
  const second = getPart('second');

  return new Date(year, month, day, hour, minute, second);
}

function isHoliday(date: Date): string | null {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const h = US_HOLIDAYS_2025_2026.find((hol) => hol.month === m && hol.day === d);
  return h ? h.name : null;
}

function getStatus(now: Date): { open: boolean; label: string; detail: string; color: string } {
  const dayOfWeek = now.getDay();
  const schedule = SCHEDULE[dayOfWeek];
  const holiday = isHoliday(now);

  if (holiday) {
    return {
      open: false,
      label: 'Closed',
      detail: `Closed for ${holiday}`,
      color: 'red',
    };
  }

  if (schedule.closedAllDay) {
    return { open: false, label: 'Closed', detail: 'Closed today', color: 'red' };
  }

  if (schedule.byAppt) {
    return {
      open: false,
      label: 'By Appointment',
      detail: `${schedule.open} – ${schedule.close} (by appt)`,
      color: 'amber',
    };
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMin = toMinutes(schedule.open!);
  const closeMin = toMinutes(schedule.close!);

  if (currentMinutes >= openMin && currentMinutes < closeMin) {
    const minsLeft = closeMin - currentMinutes;
    const closingSoon = minsLeft <= 60;
    return {
      open: true,
      label: closingSoon ? 'Closing Soon' : 'Open Now',
      detail: `Open until ${schedule.close}`,
      color: closingSoon ? 'amber' : 'green',
    };
  }

  if (currentMinutes < openMin) {
    return {
      open: false,
      label: 'Closed',
      detail: `Opens at ${schedule.open}`,
      color: 'red',
    };
  }

  return { open: false, label: 'Closed', detail: 'Closed for today', color: 'red' };
}

const colorMap = {
  green: { dot: 'bg-green-500', badge: 'bg-green-50 text-green-700 border-green-200', pulse: 'bg-green-400' },
  amber: { dot: 'bg-amber-500', badge: 'bg-amber-50 text-amber-700 border-amber-200', pulse: 'bg-amber-400' },
  red:   { dot: 'bg-red-500',   badge: 'bg-red-50 text-red-700 border-red-200',       pulse: 'bg-red-400' },
};

export default function BusinessHours() {
  const [now, setNow] = useState<Date>(getESTNow());

  useEffect(() => {
    const timer = setInterval(() => setNow(getESTNow()), 30000);
    return () => clearInterval(timer);
  }, []);

  const status = getStatus(now);
  const colors = colorMap[status.color as keyof typeof colorMap];
  const todayIdx = now.getDay();

  const timeStr = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/New_York',
  });

  const dateStr = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/New_York',
  });

  const holiday = isHoliday(now);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 flex items-center justify-center bg-primary-100 rounded-lg">
            <i className="ri-time-line text-primary-600"></i>
          </div>
          <span className="font-semibold text-gray-900 text-sm">Business Hours</span>
        </div>
        {/* Live clock */}
        <div className="text-right">
          <div className="text-sm font-bold text-gray-900">{timeStr}</div>
          <div className="text-xs text-gray-500">Eastern Time</div>
        </div>
      </div>

      {/* Status Banner */}
      <div className={`px-6 py-4 border-b border-gray-100 flex items-center justify-between ${colors.badge} border`}>
        <div className="flex items-center space-x-3">
          <div className="relative w-3 h-3 flex items-center justify-center">
            {status.open && (
              <span className={`absolute inline-flex h-full w-full rounded-full ${colors.pulse} opacity-75 animate-ping`}></span>
            )}
            <span className={`relative inline-flex rounded-full h-3 w-3 ${colors.dot}`}></span>
          </div>
          <div>
            <span className="font-bold text-sm">{status.label}</span>
            <span className="text-xs ml-2 opacity-75">— {status.detail}</span>
          </div>
        </div>
        <span className="text-xs opacity-60">{dateStr}</span>
      </div>

      {/* Holiday notice */}
      {holiday && (
        <div className="px-6 py-3 bg-amber-50 border-b border-amber-100 flex items-center space-x-2">
          <i className="ri-calendar-event-line text-amber-600"></i>
          <span className="text-xs font-semibold text-amber-700">Holiday: {holiday} — Office Closed</span>
        </div>
      )}

      {/* Weekly Schedule */}
      <div className="px-6 py-4">
        <div className="space-y-2">
          {SCHEDULE.map((day, idx) => {
            const isToday = idx === todayIdx;
            return (
              <div
                key={day.name}
                className={`flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-colors ${
                  isToday ? 'bg-primary-50 border border-primary-100' : 'hover:bg-gray-50'
                }`}
              >
                <span className={`font-medium w-28 ${isToday ? 'text-primary-700' : 'text-gray-700'}`}>
                  {isToday && <i className="ri-arrow-right-s-line mr-1 text-primary-500"></i>}
                  {day.name}
                </span>
                {day.closedAllDay ? (
                  <span className="text-red-500 font-medium">Closed</span>
                ) : day.byAppt ? (
                  <span className="text-amber-600 font-medium">
                    {day.open} – {day.close}
                    <span className="ml-1 text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">By Appt</span>
                  </span>
                ) : (
                  <span className={`font-medium ${isToday ? 'text-primary-700' : 'text-gray-600'}`}>
                    {day.open} – {day.close}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* June 1st Closure Notice */}
      <div className="px-6 py-3 bg-amber-50 border-b border-amber-100">
        <p className="text-sm text-amber-700 flex items-center space-x-2">
          <i className="ri-calendar-close-line"></i>
          <span><strong>Closed Monday, June 1st</strong> — Company holiday. Normal hours resume Tuesday, June 2nd.</span>
        </p>
      </div>

      {/* Holidays Footer */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
        <p className="text-xs text-gray-500 flex items-center space-x-1">
          <i className="ri-information-line text-gray-400"></i>
          <span>Closed on all major US federal holidays</span>
        </p>
      </div>
    </div>
  );
}