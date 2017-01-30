name := "praca-das-profissoes"

version := "1.0"

lazy val `praca-das-profissoes` = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq( javaJdbc ,  cache , javaWs )

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"

libraryDependencies ++= Seq(
  "org.webjars" %% "webjars-play" % "2.5.0",
  "org.webjars" % "jquery" % "3.1.1-1",
  "org.webjars" % "bootstrap" % "4.0.0-alpha.5" exclude("org.webjars", "jquery")
)