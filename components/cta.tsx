import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="relative rounded-3xl border border-border/50 bg-gradient-to-r from-primary/5 to-accent/5 overflow-hidden p-8 md:p-16 animate-fade-in-up">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

          <div className="relative flex flex-col items-center text-center gap-8">
            <h2 className="section-title animate-fade-in-up animate-stagger-1">
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="section-subtitle max-w-2xl animate-fade-in-up animate-stagger-2">
              Join thousands of users who are already leveraging Sophialabs' news aggregation and digital marketing education platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animate-stagger-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full"
              >
                Explore All Wings
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 rounded-full border-primary/30 hover:bg-primary/5"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
