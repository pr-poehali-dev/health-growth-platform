import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Calendar = () => {
  const weekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  const currentWeek = [
    {
      day: "ПН",
      date: 18,
      workouts: [
        { type: "Кардио", time: "08:00", color: "bg-wellness-blue-accent" },
      ],
    },
    {
      day: "ВТ",
      date: 19,
      workouts: [
        { type: "Силовая", time: "18:00", color: "bg-wellness-green-accent" },
      ],
    },
    {
      day: "СР",
      date: 20,
      workouts: [{ type: "Йога", time: "07:00", color: "bg-wellness-purple" }],
    },
    { day: "ЧТ", date: 21, workouts: [], isToday: true },
    {
      day: "ПТ",
      date: 22,
      workouts: [
        { type: "HIIT", time: "19:00", color: "bg-wellness-coral-accent" },
      ],
    },
    {
      day: "СБ",
      date: 23,
      workouts: [
        { type: "Плавание", time: "10:00", color: "bg-wellness-blue-accent" },
      ],
    },
    { day: "ВС", date: 24, workouts: [] },
  ];

  const upcomingWorkouts = [
    {
      title: "HIIT тренировка",
      time: "19:00",
      type: "Кардио",
      duration: "30 мин",
    },
    {
      title: "Утреннее плавание",
      time: "10:00",
      type: "Кардио",
      duration: "45 мин",
    },
    {
      title: "Йога для начинающих",
      time: "07:00",
      type: "Гибкость",
      duration: "60 мин",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-wellness-mint to-wellness-neutral">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-wellness-deep-mint mb-4">
            Ваш персональный календарь
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Планируйте тренировки и питание с умными напоминаниями и
            персональными рекомендациями
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-wellness-deep-mint">
                  Декабрь 2024
                </h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Icon name="ChevronLeft" size={16} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="ChevronRight" size={16} />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-4">
                {currentWeek.map((day, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${
                      day.isToday
                        ? "bg-wellness-green-accent text-white"
                        : "bg-wellness-neutral"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-sm font-medium mb-1">{day.day}</div>
                      <div className="text-2xl font-bold mb-3">{day.date}</div>
                      <div className="space-y-1">
                        {day.workouts.map((workout, idx) => (
                          <div
                            key={idx}
                            className={`p-1 rounded text-xs text-white ${workout.color}`}
                          >
                            <div className="font-medium">{workout.type}</div>
                            <div>{workout.time}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Upcoming Workouts */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-wellness-deep-mint mb-4">
                Ближайшие тренировки
              </h3>
              <div className="space-y-4">
                {upcomingWorkouts.map((workout, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-wellness-neutral"
                  >
                    <div className="w-10 h-10 bg-wellness-blue-accent/20 rounded-full flex items-center justify-center">
                      <Icon
                        name="Dumbbell"
                        className="text-wellness-blue-accent"
                        size={16}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-wellness-deep-mint">
                        {workout.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {workout.time} • {workout.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="btn-primary w-full mt-4">
                <Icon name="Plus" className="mr-2" size={16} />
                Добавить тренировку
              </Button>
            </Card>

            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-wellness-deep-mint mb-4">
                План питания
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Завтрак</span>
                  <Icon
                    name="CheckCircle"
                    className="text-wellness-green-accent"
                    size={20}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>Обед</span>
                  <Icon name="Clock" className="text-gray-400" size={20} />
                </div>
                <div className="flex justify-between items-center">
                  <span>Ужин</span>
                  <Icon name="Clock" className="text-gray-400" size={20} />
                </div>
                <div className="flex justify-between items-center">
                  <span>Перекус</span>
                  <Icon name="Clock" className="text-gray-400" size={20} />
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Icon name="Calendar" className="mr-2" size={16} />
                Открыть план питания
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
