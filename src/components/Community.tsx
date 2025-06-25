import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Community = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Марафонец",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b30c8ebb?w=150&h=150&fit=crop&crop=face",
      text: "Платформа помогла мне подготовиться к первому марафону. AI-консультант давал персональные советы каждый день!",
      achievement: "🏃‍♀️ Пробежала первый марафон",
      stats: "42 км за 4:15",
    },
    {
      name: "Михаил Соколов",
      role: "Тренер по фитнесу",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Использую платформу для работы с клиентами. Система достижений мотивирует лучше любых слов!",
      achievement: "💪 Сбросил 15 кг",
      stats: "6 месяцев тренировок",
    },
    {
      name: "Елена Васильева",
      role: "Нутрициолог",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "Календарь питания и интеграция с приложениями сэкономили часы работы. Рекомендую всем коллегам!",
      achievement: "🥗 Улучшила питание",
      stats: "21 день здорового питания",
    },
  ];

  const achievements = [
    { icon: "Award", label: "Достижения", count: "2,451" },
    { icon: "Users", label: "Активных пользователей", count: "18,329" },
    { icon: "Target", label: "Целей достигнуто", count: "9,847" },
    { icon: "MessageCircle", label: "Сообщений в чате", count: "156,291" },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-wellness-deep-mint mb-4">
            Сообщество здорового образа жизни
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Присоединяйтесь к тысячам людей, которые уже достигли своих целей с
            нашей платформой
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-gradient-to-br from-wellness-mint to-wellness-neutral border-0"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-wellness-green-accent/20 rounded-full flex items-center justify-center">
                <Icon
                  name={stat.icon as any}
                  className="text-wellness-green-accent"
                  size={24}
                />
              </div>
              <div className="text-3xl font-bold text-wellness-deep-mint mb-2">
                {stat.count}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-wellness-deep-mint">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center gap-2 text-wellness-green-accent">
                    <span>{testimonial.achievement}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.stats}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-wellness-purple hover:bg-wellness-purple/90 text-white px-8 py-3">
            <Icon name="Users" className="mr-2" />
            Присоединиться к сообществу
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
