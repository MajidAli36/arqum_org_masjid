import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ResourcesHero from "../components/ResourcesHero";

export const metadata = {
  title: "Request a Speaker | Fort Dodge Islamic Center",
  description:
    "Invite a qualified speaker from Fort Dodge Islamic Center for your school, college, faith group, or community organization.",
};

export default function RequestSpeakerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="bg-white">
        {/* Hero image */}
        <ResourcesHero />

        {/* Content */}
        <section className="bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
            <div className="prose prose-sm max-w-none text-gray-800 sm:prose-base">
              <p>Peace!</p>

              <p>
                The members of Fort Dodge Islamic Center are available to
                present programs to your school or college, church or faith
                group, or civil organization about Islam. We hope that our
                programs about Islam and Muslims will be informative, build
                understanding, correct misconceptions, and promote tolerance and
                diversity within the community.
              </p>

              <p>
                Members of the Public Relations Committee would be happy to
                speak with you about several types of programs about Islam we
                can present to you. A wide variety of program subjects are
                available, including Islam as it relates to history, political
                science, social studies, world religions, or any other relevant
                subject headings.
              </p>

              <p>
                In an attempt to be informative about Islamic religious beliefs
                and practices, we are also happy to host individuals and groups
                at Fort Dodge Islamic Center. Should you be interested in visiting our mosque,
                please contact us to schedule your visit.
              </p>

              <p>
                Please contact us or email us at{" "}
                <a
                  href="mailto:info@arqum.org"
                  className="font-semibold text-sky-700 underline underline-offset-2"
                >
                  info@arqum.org
                </a>
                . You can also leave a message at (515) 292-3683. We will
                contact you as soon as possible to work out the details.
              </p>

              <p>
                In addition, we would appreciate receiving notification of any
                events in your organization where our participation would be
                appropriate. Our members represent a wide range of diverse
                regions and cultures in the world and contribute to the
                wonderful diversity of Ames and the surrounding communities.
              </p>

              <p>Thank you,</p>

              <p className="mt-4">
                Public Relations Committee
                <br />
                Fort Dodge Islamic Center
                <br />
                Email:{" "}
                <a
                  href="mailto:info@arqum.org"
                  className="break-all font-semibold text-sky-700 underline underline-offset-2"
                >
                  info@arqum.org
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


